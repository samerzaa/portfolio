# Contact Form Setup Guide

This guide will help you set up the contact form backend with Nodemailer for your serverless portfolio.

## Prerequisites

- A Gmail account (or any email service that supports SMTP)
- A serverless hosting platform (Vercel, Netlify, etc.)

## Step 1: Get Gmail App Password

Since you're using Gmail, you'll need to create an App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable it if not already enabled)
3. Go to **App passwords**: https://myaccount.google.com/apppasswords
4. Select **Mail** and **Other (Custom name)**
5. Enter "Portfolio Contact Form" as the name
6. Click **Generate**
7. Copy the 16-character password (you'll use this as `SMTP_PASS`)

## Step 2: Set Environment Variables

### For Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
RECIPIENT_EMAIL=samereya428@gmail.com
```

### For Netlify:

1. Go to your Netlify project dashboard
2. Navigate to **Site configuration** → **Environment variables**
3. Add the same variables as above

### For Local Development:

Create a `.env` file in the root directory:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
RECIPIENT_EMAIL=samereya428@gmail.com
```

**Important:** Never commit the `.env` file to git! It's already in `.gitignore`.

## Step 3: Deploy

1. Push your changes to your repository
2. Deploy to your serverless platform
3. The API endpoint will be available at: `https://your-domain.com/api/contact`

## Testing

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox (the email specified in `RECIPIENT_EMAIL`)

## Security Features

- **Honeypot Field**: A hidden field that bots will fill but humans won't see. If filled, the submission is silently rejected.
- **Input Validation**: All fields are validated on both client and server side
- **Email Validation**: Proper email format validation
- **Error Handling**: Graceful error handling with user-friendly messages

## Troubleshooting

### Email not sending?

1. Verify your App Password is correct (16 characters, no spaces)
2. Check that 2-Step Verification is enabled on your Google Account
3. Verify environment variables are set correctly in your hosting platform
4. Check the serverless function logs for error messages

### Getting "Email service not configured" error?

- Make sure all environment variables (`SMTP_USER`, `SMTP_PASS`) are set
- Redeploy your application after adding environment variables

### Using a different email provider?

Update the `SMTP_HOST` and `SMTP_PORT` in your environment variables:

- **Gmail**: `smtp.gmail.com:587`
- **Outlook/Hotmail**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom SMTP**: Use your provider's SMTP settings

## API Endpoint

The contact form sends POST requests to `/api/contact` with the following payload:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project...",
  "website": "" // Honeypot field (should be empty)
}
```

Response format:

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

Or on error:

```json
{
  "success": false,
  "error": "Error message here"
}
```

