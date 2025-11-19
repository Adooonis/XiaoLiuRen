#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
创建极简黑色图标
"""

from PIL import Image, ImageDraw
import math
import os

def create_minimal_black_icon(size, filename):
    """创建极简黑色图标"""
    
    # 创建黑色背景图像
    img = Image.new('RGB', (size, size), color='black')
    draw = ImageDraw.Draw(img)
    
    # 计算中心点和缩放比例
    center_x = size // 2
    center_y = size // 2
    scale = size / 192  # 基于192px设计图缩放
    
    # 六边形顶点计算
    hex_size = 45 * scale  # 六边形半径
    white_color = 'white'
    
    # 绘制六边形轮廓
    hex_points = []
    for i in range(6):
        angle = math.radians(i * 60 - 90)  # 起始角度-90度，使顶点朝上
        x = center_x + hex_size * math.cos(angle)
        y = center_y + hex_size * math.sin(angle)
        hex_points.append((x, y))
    
    # 绘制六边形（使用线条）
    for i in range(6):
        start_point = hex_points[i]
        end_point = hex_points[(i + 1) % 6]
        draw.line([start_point, end_point], fill=white_color, width=int(2 * scale))
    
    # 绘制中心圆点
    center_radius = 3 * scale
    draw.ellipse([center_x - center_radius, center_y - center_radius, 
                  center_x + center_radius, center_y + center_radius], 
                 fill=white_color)
    
    # 绘制三条水平线
    line_y_positions = [-12 * scale, 0, 12 * scale]
    line_width = 1.5 * scale
    for y_pos in line_y_positions:
        draw.line([(center_x - 20 * scale, center_y + y_pos), 
                  (center_x + 20 * scale, center_y + y_pos)], 
                 fill=white_color, width=int(line_width))
    
    # 保存图像
    img.save(filename, 'PNG')
    print(f"已生成: {filename} ({size}x{size})")

def main():
    """主函数"""
    try:
        # 创建192x192图标
        create_minimal_black_icon(192, 'icon-192.png')
        
        # 创建512x512图标
        create_minimal_black_icon(512, 'icon-512.png')
        
        print("✅ 极简黑色图标创建完成！")
        
        # 验证文件
        if os.path.exists('icon-192.png') and os.path.exists('icon-512.png'):
            print("✅ 图标文件验证成功")
        else:
            print("❌ 图标文件验证失败")
            
    except Exception as e:
        print(f"❌ 创建图标时出错: {e}")

if __name__ == '__main__':
    main()