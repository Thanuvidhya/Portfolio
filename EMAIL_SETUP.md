# Email Setup Instructions for Contact Form

## Option 1: EmailJS Setup (Recommended)

To make the contact form work with EmailJS, follow these steps:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account (`thanuvidhyac@gmail.com`)
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use these template variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (hardcoded as thanuvidhyac@gmail.com)

**Sample Template:**
```
Subject: New Portfolio Contact from {{from_name}}

You received a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Update JavaScript File
Open `js/script.js` and replace these placeholders:
- `YOUR_PUBLIC_KEY` → Your actual public key
- `YOUR_SERVICE_ID` → Your actual service ID  
- `YOUR_TEMPLATE_ID` → Your actual template ID

## Option 2: Simple Mailto (Fallback)

If you don't want to use EmailJS, the form will automatically fallback to opening the user's default email client with a pre-filled email to `thanuvidhyac@gmail.com`.

## Testing the Form

1. Open your portfolio in a browser
2. Go to the "Get In Touch" section
3. Fill out the form and submit
4. You should receive an email at `thanuvidhyac@gmail.com`

## Security Notes

- EmailJS is secure and doesn't expose your email address
- The free EmailJS plan allows 200 emails per month
- Always validate form inputs before processing
- Consider adding CAPTCHA for production use

## Troubleshooting

If emails aren't sending:
1. Check your EmailJS configuration
2. Verify your service is properly connected
3. Check your template variables match
4. Ensure your public key is correct
5. Look at the browser console for errors

The fallback mailto method will always work as a backup.
