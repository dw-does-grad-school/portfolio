import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, email, message } = body;

    const msg = {
      to: 'dwelsh2@clemson.edu', // Your email address
      from: 'dwelsh2@clemson.edu', // Verified sender email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await sgMail.send(msg);
    
    return {
      success: true,
      message: 'Email sent successfully'
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw createError({
      statusCode: 500,
      message: 'Failed to send email'
    });
  }
}); 