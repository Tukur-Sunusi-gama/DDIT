import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req: Request) => {
  console.log("Edge function called");
  try {
    const { quote } = await req.json();
    console.log("Parsed quote:", quote);

    // TODO: Integrate with email service (e.g., Resend) to send email to contact@ddit.com
    // For now, log the quote details
    console.log("New quote received:", quote);
  } catch (error) {
    console.error("Error parsing request:", error);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Example with Resend (uncomment and add API key)
  // const res = await fetch('https://api.resend.com/emails', {
  //   method: 'POST',
  //   headers: {
  //     'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     from: 'noreply@ddit.com',
  //     to: 'contact@ddit.com',
  //     subject: 'New Quote Request',
  //     html: `<p>New quote from ${quote.user_email}:</p><p>Service: ${quote.service_type}</p><p>Description: ${quote.description}</p><p>Budget: ${quote.budget_range}</p>`,
  //   }),
  // })

  return new Response(JSON.stringify({ message: "Email notification sent" }), {
    headers: { "Content-Type": "application/json" },
  });
});
