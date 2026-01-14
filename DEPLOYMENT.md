# 🚀 Deployment Guide - CurrencyX

## Quick Deploy to GitHub Pages

### Step 1: Prepare for Deployment

1. **Copy the production config**:
   ```bash
   cp config.prod.js config.js
   ```

2. **Edit `config.js` and add your API key**:
   ```javascript
   const CONFIG = {
       API_KEY: 'your_actual_api_key_here',
       API_BASE_URL: 'https://v6.exchangerate-api.com/v6'
   };
   ```

3. **Temporarily allow config.js in git**:
   - Open `.gitignore`
   - Comment out or remove the line: `config.js`
   - Save the file

### Step 2: Commit and Push

```bash
git add config.js .gitignore
git commit -m "Add config for deployment"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/RanjithThurai/CurrencyX
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**:
   - Select branch: **main**
   - Select folder: **/ (root)**
   - Click **Save**

### Step 4: Wait for Deployment

- GitHub will build and deploy your site
- Usually takes 1-3 minutes
- Check the Pages section for the live URL

### Step 5: Access Your Live Site

Your site will be available at:
```
https://ranjiththurai.github.io/CurrencyX/
```

---

## Alternative: Deploy to Netlify

### Quick Netlify Deploy

1. **Visit**: https://app.netlify.com/drop

2. **Drag and drop** your project folder (make sure `config.js` has your API key)

3. **Instant deployment** - you'll get a live URL immediately!

4. **Optional**: Connect to GitHub for automatic deployments

---

## Alternative: Deploy to Vercel

### One-Click Vercel Deploy

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy from terminal**:
   ```bash
   cd "c:/Ranjith D/Projects/Git Pushed/Weeb 2"
   vercel
   ```

3. **Follow prompts** and your site will be live!

Or use the web interface:
1. Visit https://vercel.com/new
2. Import your GitHub repository
3. Deploy!

---

## 🔒 Security Considerations

### API Key Visibility

⚠️ **Important**: In client-side applications, your API key will be visible in the browser's source code.

**Options**:

1. **Use the free tier** - ExchangeRate-API free tier is designed for client-side use
2. **Monitor usage** - Set up alerts in your ExchangeRate-API dashboard
3. **Rate limiting** - The API has built-in rate limits
4. **Backend proxy** (advanced) - Create a backend service to hide the key

### Recommended: Use Backend Proxy (Optional)

For production apps with sensitive API keys, consider:
- Creating a simple backend (Node.js, Python, etc.)
- Backend makes API calls with the key
- Frontend calls your backend instead

---

## 📊 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] Currency conversion works
- [ ] All 165+ currencies are available
- [ ] Dropdown selections work
- [ ] Swap button functions
- [ ] Popular conversions display
- [ ] Responsive design works on mobile
- [ ] API calls are successful
- [ ] No console errors

---

## 🔄 Updating Your Deployed Site

### GitHub Pages
```bash
# Make changes to your code
git add .
git commit -m "Update: description of changes"
git push origin main
# GitHub Pages will auto-deploy in 1-3 minutes
```

### Netlify/Vercel
- Automatic deployment on every push to main branch
- Or manually trigger deployment from dashboard

---

## 🌐 Custom Domain (Optional)

### Add Custom Domain to GitHub Pages

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In GitHub Pages settings, add your custom domain
3. Configure DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
4. Add CNAME record:
   ```
   Type: CNAME
   Name: www
   Value: ranjiththurai.github.io
   ```

---

## 🐛 Troubleshooting

### Site not loading?
- Check GitHub Pages settings
- Ensure `index.html` is in root directory
- Wait 5 minutes for DNS propagation

### API not working?
- Verify API key in `config.js`
- Check browser console for errors
- Ensure `config.js` is loaded before `app.js`

### 404 Error?
- Verify repository name matches URL
- Check that files are in the correct directory
- Clear browser cache

---

## 📱 Test Your Deployment

After deployment, test:
1. Open in different browsers
2. Test on mobile devices
3. Check all currency conversions
4. Verify API calls in Network tab
5. Test responsive design

---

**Need help?** Check the main README.md or open an issue on GitHub.

**Live Site**: https://ranjiththurai.github.io/CurrencyX/
