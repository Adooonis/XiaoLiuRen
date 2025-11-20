# 阿里云通义千问 API 配置文件

## 🔑 API 配置说明

### 新的API配置
```javascript
// API配置已更新为阿里云通义千问
const DASHSCOPE_API_KEY = 'your_dashscope_key_here'; // 需要替换为您的实际API密钥
const DASHSCOPE_API_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';
const MODEL_NAME = 'qwen-max';
```

### 主要变更

| 项目 | DeepSeek | 通义千问 |
|------|----------|----------|
| **API URL** | `https://api.deepseek.com/v1/chat/completions` | `https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions` |
| **认证方式** | `X-API-Key` | `Authorization: Bearer` |
| **API密钥变量** | `DEEPSEEK_API_KEY` | `DASHSCOPE_API_KEY` |
| **模型名称** | `deepseek-chat` | `qwen-max` |
| **函数名** | `analyzeWithDeepSeek()` | `analyzeWithQwen()` |

## 🔧 更新后的文件

✅ **已完成更新：**
- `index.html` - 主应用文件
- `index_test.html` - 测试版本
- `simple_test.html` - 简化测试版本
- `test_api.html` - API测试页面
- `小六壬神课_最终版.html` - 最终完整版
- `qwen_api_test.html` - 新创建的通义千问专用测试页面

## 📝 下一步操作

### 1. 获取阿里云API密钥
如果您还没有阿里云通义千问的API密钥：

1. 访问 [阿里云百炼平台](https://dashscope.console.aliyun.com/)
2. 注册/登录阿里云账户
3. 开通通义千问API服务
4. 创建API密钥（生成DASHSCOPE_API_KEY）

### 2. 配置API密钥
在每个HTML文件中替换：
```javascript
const DASHSCOPE_API_KEY = 'your_dashscope_key_here'; // 替换为您的实际密钥
```

### 3. 测试验证
使用 `qwen_api_test.html` 页面测试API连接是否正常。

## 🎯 Qwen-Max 模型优势

- **🚀 高性能**：阿里云最新旗舰级大模型
- **🇨🇳 中文优化**：专门针对中文理解和生成优化
- **🧠 推理能力强**：适合复杂分析任务
- **🔄 API兼容**：完全兼容OpenAI格式，迁移简单
- **💰 成本效益**：提供多种模型选择，灵活定价

## 📊 功能验证

更新后的应用功能：
- ✅ 小六壬六神计算算法（已修复）
- ✅ 传统解读文本生成
- ✅ 通义千问AI深度分析
- ✅ 用户友好的界面
- ✅ 错误处理和提示

现在您的应用已经完全迁移到阿里云通义千问平台，可以享受更好的中文理解和分析能力！