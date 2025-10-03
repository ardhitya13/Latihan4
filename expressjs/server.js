const express = require("express");
const app = express();
const port = 8001;

// Data articles dengan URL gambar yang VALID dari Unsplash
const articles = [
    {
        id: 1,
        title: "Pengembangan Teknologi AI Terbaru",
        urlImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
        description: "Teknologi AI semakin berkembang pesat dengan berbagai inovasi terbaru.",
        author: "John Doe",
        createdAt: "2024-01-15"
    },
    {
        id: 2,
        title: "Web Development Trends 2024",
        urlImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop",
        description: "Tren pengembangan web di tahun 2024 akan didominasi oleh framework modern.",
        author: "Jane Smith",
        createdAt: "2024-01-16"
    },
    {
        id: 3,
        title: "Belajar Next.js untuk Pemula",
        urlImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
        description: "Panduan lengkap belajar Next.js dari dasar hingga mahir.",
        author: "Bob Johnson",
        createdAt: "2024-01-17"
    }
];

app.get("/api/test/getarticle", (req, res) => {
    res.json({
        status: "success",
        data: articles
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});