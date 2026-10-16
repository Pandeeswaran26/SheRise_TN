import os
from PIL import Image, ImageDraw, ImageOps
import json

base_dir = os.path.abspath(os.path.dirname(__file__) + '/..')
branding_dir = os.path.join(base_dir, 'assets', 'branding')
android_res = os.path.join(base_dir, 'assets', 'android', 'res')

icon_path = os.path.join(branding_dir, 'sherise_app_icon.png')
splash_path = os.path.join(branding_dir, 'sherise_splash_screen.png')

icon_img = Image.open(icon_path).convert('RGBA')
splash_img = Image.open(splash_path).convert('RGBA')

# Define Android Icon sizes
icon_sizes = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192,
}

# Generate standard & round icons
for folder, size in icon_sizes.items():
    folder_path = os.path.join(android_res, folder)
    os.makedirs(folder_path, exist_ok=True)
    
    # Standard square/squircle icon
    resized = icon_img.resize((size, size), Image.Resampling.LANCZOS)
    resized.save(os.path.join(folder_path, 'ic_launcher.png'), 'PNG')
    
    # Round icon with circular mask
    mask = Image.new('L', (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size - 1, size - 1), fill=255)
    
    round_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    round_img.paste(resized, (0, 0), mask)
    round_img.save(os.path.join(folder_path, 'ic_launcher_round.png'), 'PNG')

# 512x512 Google Play Store Icon
playstore_icon = icon_img.resize((512, 512), Image.Resampling.LANCZOS)
playstore_icon.save(os.path.join(branding_dir, 'ic_launcher_playstore_512.png'), 'PNG')

# High-res 1080x1920 Android Splash Graphic
drawable_xxxhdpi = os.path.join(android_res, 'drawable-xxxhdpi')
os.makedirs(drawable_xxxhdpi, exist_ok=True)
splash_highres = splash_img.resize((1080, 2160), Image.Resampling.LANCZOS)
splash_highres.save(os.path.join(drawable_xxxhdpi, 'splash_screen.png'), 'PNG')
splash_highres.save(os.path.join(branding_dir, 'sherise_splash_1080x2160.png'), 'PNG')

# Favicon and Web Assets
public_dir = os.path.join(base_dir, 'public')
os.makedirs(public_dir, exist_ok=True)
icon_img.resize((192, 192), Image.Resampling.LANCZOS).save(os.path.join(public_dir, 'icon-192.png'), 'PNG')
icon_img.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(public_dir, 'icon-512.png'), 'PNG')
icon_img.resize((32, 32), Image.Resampling.LANCZOS).save(os.path.join(public_dir, 'favicon.png'), 'PNG')

# Also copy splash to public for easy web access
splash_img.save(os.path.join(public_dir, 'splash_preview.png'), 'PNG')
icon_img.save(os.path.join(public_dir, 'icon_preview.png'), 'PNG')

print("Assets successfully generated and organized for Android & Web!")
