# API Key Configuration Guide

## Overview
The API key has been separated into a dedicated configuration file for better security and maintainability.

## File Structure

```
Weeb 2/
├── .env                    # Environment variables (gitignored)
├── .gitignore             # Git ignore rules
├── config.example.js      # Template config file (safe to commit)
├── config.js              # Your actual config with API key (gitignored)
├── app.js                 # Main application code
├── index.html             # HTML structure
├── index.css              # Styling
└── README.md              # Documentation
```

## Setup Instructions

### 1. Create Your Config File

Copy the example config file:
```bash
cp config.example.js config.js
```

### 2. Add Your API Key

Edit `config.js` and replace `YOUR_API_KEY_HERE` with your actual API key:

```javascript
const CONFIG = {
    API_KEY: 'your_actual_api_key_here',
    API_BASE_URL: 'https://v6.exchangerate-api.com/v6'
};
```

### 3. Get Your API Key

1. Visit [ExchangeRate-API](https://www.exchangerate-api.com/)
2. Sign up for a free account
3. Copy your API key from the dashboard
4. Paste it into `config.js`

## Security Features

✅ **config.js is gitignored** - Your API key won't be committed to version control  
✅ **.env is gitignored** - Environment variables are protected  
✅ **config.example.js is safe** - Template file can be shared publicly  

## How It Works

1. **index.html** loads `config.js` first, then `app.js`
2. **config.js** defines the `CONFIG` object with your API key
3. **app.js** uses `CONFIG.API_KEY` to make API requests

## For Developers

### Sharing Your Project

When sharing your project:
- ✅ Include `config.example.js`
- ✅ Include `.gitignore`
- ❌ Never commit `config.js` with your actual API key
- ❌ Never commit `.env` files

### Team Collaboration

Each team member should:
1. Clone the repository
2. Copy `config.example.js` to `config.js`
3. Add their own API key to `config.js`
4. Never commit their `config.js` file

## Troubleshooting

### "CONFIG is not defined" Error
- Make sure `config.js` exists in the project root
- Verify `config.js` is loaded before `app.js` in `index.html`
- Check that `config.js` defines the `CONFIG` object

### API Key Not Working
- Verify your API key is correct in `config.js`
- Check that you haven't exceeded your API rate limit
- Ensure there are no extra spaces or quotes around the key

### Mock Data Being Used
- The app falls back to mock data if:
  - `config.js` doesn't exist
  - API key is missing or invalid
  - No internet connection
  - API request fails

## Environment Variables (.env)

The `.env` file is also included for reference, though it's not used in the browser version. It's useful if you later convert this to a Node.js application.

Current `.env` format:
```
API_KEY=your_api_key_here
```

## Best Practices

1. **Never hardcode API keys** in your main application files
2. **Always use .gitignore** to protect sensitive files
3. **Provide example files** (like `config.example.js`) for other developers
4. **Document the setup process** clearly in README
5. **Use environment variables** for production deployments

## Production Deployment

For production:
- Use environment variables on your hosting platform
- Consider using a backend proxy to hide your API key
- Implement rate limiting and caching
- Monitor API usage

---

**Last Updated**: January 2026
