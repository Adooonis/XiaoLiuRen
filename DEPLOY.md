# 小六壬神课 - 部署指南

## 🚀 快速部署

### 方案一：GitHub Pages（推荐）

1. **创建 GitHub 仓库**
   - 新建一个公开仓库，命名为 `liuren-pwa`
   - 将所有文件上传到仓库

2. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - 保存设置

3. **访问应用**
   - 几分钟后可通过 `https://用户名.github.io/liuren-pwa/` 访问

### 方案二：Netlify

1. **拖拽部署**
   - 访问 [netlify.com](https://netlify.com)
   - 将整个项目文件夹拖拽到部署区域
   - 自动获得 https 域名

2. **手动上传**
   - 新建站点 → 手动部署
   - 上传所有文件
   - 等待构建完成

### 方案三：Vercel

1. **GitHub 集成**
   - 连接 GitHub 仓库
   - 自动检测并部署

2. **命令行部署**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### 方案四：其他静态托管

支持静态文件的托管服务：
- **Firebase Hosting**
- **AWS S3 + CloudFront**
- **阿里云 OSS**
- **腾讯云 COS**

## 📁 文件结构

```
liuren-pwa/
├── index.html          # 主应用页面
├── start.html          # 快速开始页面  
├── test-ai.html        # AI功能测试页面
├── manifest.json       # PWA应用清单
├── service-worker.js   # Service Worker
├── icon-192.png        # 应用图标 192x192
├── icon-512.png        # 应用图标 512x512
├── icon-simple.svg     # 原始图标文件
└── README.md           # 使用说明
```

## ⚙️ 配置说明

### PWA 配置 (manifest.json)

- **name**: 应用全名
- **short_name**: 简短名称
- **start_url**: 启动页面
- **display**: 显示模式
- **icons**: 应用图标
- **theme_color**: 主题色

### Service Worker (service-worker.js)

- **缓存策略**: Cache First
- **离线支持**: 基本功能可离线使用
- **更新机制**: 自动检测并更新缓存

## 🔧 自定义配置

### 修改应用信息

编辑 `manifest.json`：
```json
{
  "name": "您的应用名",
  "short_name": "简称",
  "description": "应用描述"
}
```

### 更换图标

1. 准备 PNG 格式图标（192x192 和 512x512）
2. 替换 `icon-192.png` 和 `icon-512.png`
3. 如需 SVG 格式，编辑 `icon-simple.svg`

### 修改颜色主题

在 `index.html` 的 CSS 部分修改：
```css
:root {
  --primary-color: #A42A28;    /* 主色调 */
  --secondary-color: #A98B4F;  /* 次要色 */
  --background-color: #F5F1E9; /* 背景色 */
}
```

## 🔐 DeepSeek API 集成

### API Key 安全

- API Key 仅在客户端使用，不会上传到服务器
- 建议用户定期更换 API Key
- 可以考虑部署服务端代理服务

### API 调用限制

- 每次请求消耗一定的 tokens
- 建议在前端添加请求频率限制
- 可以实现本地缓存减少 API 调用

## 📱 PWA 安装

### 桌面安装提示

现代浏览器会自动检测 PWA 并显示安装提示：
- **Chrome**: 地址栏安装图标
- **Safari**: 分享菜单 → "添加到主屏幕"
- **Edge**: 菜单 → "应用" → "安装此站点"

### 离线功能

安装后的 PWA 支持：
- ✅ 离线起卦测算
- ✅ 离线查看历史结果
- ❌ 需要网络：AI智能建议
- ❌ 需要网络：PWA更新

## 🛠️ 开发和调试

### 本地开发

1. **使用 Live Server**
   ```bash
   npm install -g live-server
   live-server --port=8080
   ```

2. **使用 Python**
   ```bash
   # Python 3
   python -m http.server 8080
   
   # Python 2
   python -m SimpleHTTPServer 8080
   ```

3. **使用 Node.js**
   ```bash
   npx http-server -p 8080
   ```

### 调试工具

- **Lighthouse**: 检查 PWA 性能
- **Chrome DevTools**: 调试 Service Worker
- **PWA Builder**: PWA 检查工具

## 📊 性能优化

### 已实现的优化

- ✅ Service Worker 缓存
- ✅ 响应式设计
- ✅ 图片压缩
- ✅ CSS/JS 最小化
- ✅ 字体预加载

### 进一步优化

- 🔄 添加离线页面
- 🔄 实现数据同步
- 🔄 添加推送通知
- 🔄 实现分享功能

## 🔍 故障排除

### 常见问题

**PWA 无法安装**
- 检查 HTTPS 部署
- 确认 manifest.json 正确
- 验证 Service Worker 注册

**离线功能不工作**
- 检查 Service Worker 状态
- 清除浏览器缓存
- 重新注册 Service Worker

**AI 功能失败**
- 验证 API Key 有效性
- 检查网络连接
- 确认 API 额度充足

## 📞 技术支持

如遇到部署问题，可参考：

- [MDN PWA 指南](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)
- [Google PWA 文档](https://developers.google.com/web/progressive-web-apps)
- [DeepSeek API 文档](https://platform.deepseek.com/docs)

---

**祝您部署成功！🎉**