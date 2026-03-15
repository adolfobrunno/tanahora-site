import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env }>();

app.use("/*", cors());

// Criar preferência de pagamento no Mercado Pago
app.post("/api/checkout", async (c) => {
  try {
    const accessToken = c.env.MERCADOPAGO_ACCESS_TOKEN;
    
    if (!accessToken) {
      return c.json({ error: "Mercado Pago não configurado" }, 500);
    }

    const body = await c.req.json();
    const plan = body.plan;

    if (plan !== "premium") {
      return c.json({ error: "Plano inválido" }, 400);
    }

    // Criar preferência de pagamento recorrente
    const preference = {
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        transaction_amount: 9.99,
        currency_id: "BRL",
      },
      back_urls: {
        success: `${new URL(c.req.url).origin}/success`,
        failure: `${new URL(c.req.url).origin}/failure`,
        pending: `${new URL(c.req.url).origin}/pending`,
      },
      reason: "Assinatura Premium - Tá na Hora!",
      external_reference: `premium_${Date.now()}`,
      payer_email: body.email || "",
    };

    const response = await fetch(
      "https://api.mercadopago.com/preapproval",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(preference),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Mercado Pago error:", errorData);
      return c.json({ error: "Erro ao criar pagamento" }, 500);
    }

    const data = await response.json() as { init_point: string };
    return c.json({ init_point: data.init_point });
  } catch (error) {
    console.error("Checkout error:", error);
    return c.json({ error: "Erro ao processar checkout" }, 500);
  }
});

// Webhook para notificações do Mercado Pago
app.post("/api/webhook/mercadopago", async (c) => {
  try {
    const body = await c.req.json();
    
    // Aqui você pode processar as notificações de pagamento
    // Por exemplo: atualizar o status da assinatura no banco de dados
    console.log("Mercado Pago notification:", body);

    // Retornar 200 para confirmar recebimento
    return c.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return c.json({ error: "Erro ao processar webhook" }, 500);
  }
});

export default app;
