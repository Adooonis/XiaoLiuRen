#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from PIL import Image, ImageDraw, ImageFont

def create_icon(size, filename):
    try:
        # 创建黑色背景
        img = Image.new('RGB', (size, size), 'black')
        draw = ImageDraw.Draw(img)
        
        # 计算字体大小
        font_size = int(size * 0.2)
        
        # 使用默认字体
        try:
            # 尝试使用系统中文字体
            font_paths = [
                '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
                '/System/Library/Fonts/PingFang.ttc',
                '/Windows/Fonts/msyh.ttc',
                '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf'
            ]
            
            font = None
            for font_path in font_paths:
                if os.path.exists(font_path):
                    font = ImageFont.truetype(font_path, font_size)
                    break
            
            if font is None:
                font = ImageFont.load_default()
        except:
            font = ImageFont.load_default()
        
        # 文字内容
        text = '六壬'
        
        # 获取文字边界框
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        # 计算居中位置
        x = (size - text_width) // 2
        y = (size - text_height) // 2 - font_size // 4
        
        # 绘制白色文字
        draw.text((x, y), text, fill='white', font=font)
        
        # 保存PNG文件
        img.save(filename, 'PNG')
        print(f'已生成: {filename} ({size}x{size})')
        return True
        
    except Exception as e:
        print(f'生成 {filename} 时出错: {e}')
        return False

if __name__ == '__main__':
    import os
    success = True
    success &= create_icon(192, 'icon-192.png')
    success &= create_icon(512, 'icon-512.png')
    
    if success:
        print('所有图标生成成功！')
    else:
        print('部分图标生成失败')
        
    # 验证文件
    for size in [192, 512]:
        filename = f'icon-{size}.png'
        if os.path.exists(filename):
            print(f'✓ {filename} 已创建')
        else:
            print(f'✗ {filename} 创建失败')