#!/bin/bash

echo "🎬 Compression des vidéos pour mobile et desktop..."
echo ""

# Vérifier que ffmpeg est installé
if ! command -v ffmpeg &> /dev/null
then
    echo "❌ FFmpeg n'est pas installé !"
    echo ""
    echo "📦 Installation rapide :"
    echo "  macOS:   brew install ffmpeg"
    echo "  Linux:   sudo apt install ffmpeg"
    echo "  Windows: choco install ffmpeg"
    exit 1
fi

# Dossier des vidéos
VIDEO_DIR="./public/videos"

# Vérifier que le dossier existe
if [ ! -d "$VIDEO_DIR" ]; then
    echo "❌ Le dossier $VIDEO_DIR n'existe pas !"
    exit 1
fi

# Compteur
count=0

# Traiter chaque fichier .mp4 (mais ignorer ceux déjà traités)
for file in "$VIDEO_DIR"/*.mp4; do
    # Ignorer les fichiers qui contiennent déjà -desktop ou -mobile
    if [[ "$file" == *"-desktop.mp4" ]] || [[ "$file" == *"-mobile.mp4" ]] || [[ "$file" == *"-poster.jpg" ]]; then
        continue
    fi
    
    # Extraire le nom sans extension
    filename=$(basename "$file" .mp4)
    
    # Vérifier si les versions existent déjà
    if [ -f "$VIDEO_DIR/${filename}-desktop.mp4" ] && [ -f "$VIDEO_DIR/${filename}-mobile.mp4" ]; then
        echo "⏭️  $filename déjà compressé, ignoré"
        continue
    fi
    
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🎥 Traitement: $filename"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    # Version DESKTOP (1080p, qualité élevée)
    echo "🖥️  Création version desktop (1080p)..."
    ffmpeg -i "$file" \
        -vf "scale=1080:-2" \
        -c:v libx264 -preset medium -crf 23 \
        -c:a aac -b:a 128k \
        -movflags +faststart \
        -y \
        "$VIDEO_DIR/${filename}-desktop.mp4" \
        -hide_banner -loglevel error
    
    if [ $? -eq 0 ]; then
        echo "✅ Desktop OK"
    else
        echo "❌ Erreur desktop"
    fi
    
    # Version MOBILE (720p, optimisée)
    echo "📱 Création version mobile (720p)..."
    ffmpeg -i "$file" \
        -vf "scale=720:-2" \
        -c:v libx264 -preset medium -crf 28 \
        -c:a aac -b:a 96k \
        -movflags +faststart \
        -y \
        "$VIDEO_DIR/${filename}-mobile.mp4" \
        -hide_banner -loglevel error
    
    if [ $? -eq 0 ]; then
        echo "✅ Mobile OK"
    else
        echo "❌ Erreur mobile"
    fi
    
    # Statistiques de taille
    original_size=$(du -h "$file" | cut -f1)
    desktop_size=$(du -h "$VIDEO_DIR/${filename}-desktop.mp4" | cut -f1)
    mobile_size=$(du -h "$VIDEO_DIR/${filename}-mobile.mp4" | cut -f1)
    
    echo ""
    echo "📊 Tailles:"
    echo "   Original: $original_size"
    echo "   Desktop:  $desktop_size"
    echo "   Mobile:   $mobile_size"
    
    ((count++))
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 Terminé ! $count vidéo(s) compressée(s)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📁 Fichiers créés dans: $VIDEO_DIR"
echo ""
echo "💡 Prochaine étape: Modifier videos-data.ts pour utiliser les nouvelles vidéos"
