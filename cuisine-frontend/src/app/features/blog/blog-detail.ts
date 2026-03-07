import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorBio: string;
  date: string;
  image: string;
  category: string;
  readTime: number;
  tags: string[];
}

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export class BlogDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // Static blog content
  private allBlogs: BlogPost[] = [
    {
      id: 1,
      title: 'The Art of French Cooking: Classic Techniques Everyone Should Know',
      excerpt: 'Discover the fundamental techniques that make French cuisine legendary.',
      content: `French cuisine is renowned worldwide for its sophistication, technique, and attention to detail. At its core, French cooking is built upon a foundation of classic techniques that every serious cook should master.

## The Mother Sauces

One of the most fundamental concepts in French cooking is the five mother sauces, established by Auguste Escoffier. These sauces form the base for countless derivative sauces:

1. **Béchamel** - A white sauce made with milk and a white roux
2. **Velouté** - A light stock-based sauce, thickened with a roux
3. **Espagnole** - A rich brown sauce made with brown stock
4. **Sauce Tomate** - A tomato-based sauce
5. **Hollandaise** - An emulsion of egg yolk, butter, and lemon juice

## Knife Skills

The French have perfected the art of cutting vegetables into precise, uniform pieces. The classic cuts include:

- **Julienne** - Thin, matchstick-sized strips
- **Brunoise** - Tiny cubes (1/8 inch)
- **Chiffonade** - Thin ribbons of leafy herbs or vegetables
- **Mirepoix** - A flavor base of diced onions, carrots, and celery

## The Importance of Mise en Place

"Mise en place" translates to "everything in its place." This principle emphasizes having all your ingredients prepped and ready before you start cooking. It's the secret to efficient, stress-free cooking.`,
      author: 'Marie Laurent',
      authorBio: 'Marie is a classically trained French chef with over 20 years of experience in Parisian kitchens.',
      date: '2026-03-05',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
      category: 'Techniques',
      readTime: 8,
      tags: ['French', 'Techniques', 'Sauces', 'Classic']
    },
    {
      id: 2,
      title: '10 Essential Spices That Will Transform Your Dishes',
      excerpt: 'Spices are the heart of flavorful cooking.',
      content: `Every great dish starts with great ingredients, and spices are among the most powerful tools in a cook's arsenal. Here are 10 essential spices that will elevate your cooking to new heights.

## 1. Cumin
Earthy and warm, cumin is essential in Middle Eastern, Indian, and Mexican cuisines. Toast whole seeds before grinding for maximum flavor.

## 2. Paprika
From sweet to smoked to hot, paprika adds color and depth. Spanish smoked paprika (pimentón) is particularly special.

## 3. Cinnamon
Beyond baking, cinnamon adds warmth to savory dishes like Moroccan tagines and Indian curries.

## 4. Turmeric
This vibrant yellow spice has anti-inflammatory properties and is essential in curries and golden milk.

## 5. Coriander
Bright and citrusy, coriander seeds work in everything from pickles to curry powders.

## 6. Cardamom
Complex and aromatic, cardamom is equally at home in chai tea and Scandinavian baked goods.

## 7. Black Pepper
The king of spices – use freshly ground for the best flavor.

## 8. Cloves
Intensely aromatic, use sparingly in both sweet and savory dishes.

## 9. Nutmeg
Freshly grated nutmeg transforms béchamel, soups, and desserts.

## 10. Red Pepper Flakes
Add heat and visual appeal to any dish.`,
      author: 'John Smith',
      authorBio: 'John is a spice merchant and culinary educator who has traveled the world exploring flavor.',
      date: '2026-03-04',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800',
      category: 'Ingredients',
      readTime: 6,
      tags: ['Spices', 'Ingredients', 'Flavor', 'Pantry']
    },
    {
      id: 3,
      title: 'Healthy Meal Prep: A Complete Beginner\'s Guide',
      excerpt: 'Save time and eat healthier with meal prepping.',
      content: `Meal prepping is one of the best ways to save time, money, and eat healthier throughout the week. This guide will help you get started.

## Why Meal Prep?

- Save 5-10 hours per week
- Reduce food waste by up to 25%
- Make healthier choices easier
- Save money on takeout and dining out

## Getting Started

### Step 1: Plan Your Menu
Choose 3-4 recipes that share ingredients. This reduces waste and shopping time.

### Step 2: Make a Shopping List
Organize by store section to make shopping efficient.

### Step 3: Prep Day Strategy
- Start with items that take longest (roasted vegetables, grains)
- While those cook, prep fresh items
- Save assembly for last

## Essential Containers

Invest in quality glass containers that are microwave and freezer safe. Different sizes for different portions.

## Sample Prep Day Menu

**Proteins:** Grilled chicken, baked salmon, hard-boiled eggs
**Grains:** Brown rice, quinoa
**Vegetables:** Roasted broccoli, sautéed spinach, raw salad ingredients
**Snacks:** Cut vegetables, hummus, portioned nuts`,
      author: 'Sarah Johnson',
      authorBio: 'Sarah is a nutritionist and meal prep expert who helps busy families eat better.',
      date: '2026-03-03',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800',
      category: 'Healthy',
      readTime: 10,
      tags: ['Meal Prep', 'Healthy', 'Planning', 'Time-saving']
    },
    {
      id: 4,
      title: 'The Secret to Perfect Homemade Pasta Every Time',
      excerpt: 'Nothing beats fresh homemade pasta.',
      content: `There's something magical about fresh pasta – the tender texture, the way it holds sauce, the satisfaction of making it yourself.

## The Basic Ratio

For perfect pasta every time, remember this ratio:
- 100g flour per 1 egg
- That's it!

## The Method

1. **Make a well** in your flour on a clean surface
2. **Crack eggs** into the center
3. **Gradually incorporate** flour from the edges
4. **Knead** for 8-10 minutes until smooth
5. **Rest** for 30 minutes wrapped in plastic
6. **Roll and cut** to your desired shape

## Tips for Success

- Use tipo 00 flour for the silkiest pasta
- Room temperature eggs incorporate better
- Don't skip the resting period
- Cook in heavily salted water
- Fresh pasta only needs 2-3 minutes to cook

## Sauce Pairings

- **Tagliatelle** → Creamy sauces, ragù
- **Pappardelle** → Hearty meat sauces
- **Fettuccine** → Alfredo, carbonara
- **Ravioli** → Butter and sage, tomato sauce`,
      author: 'Marco Rossi',
      authorBio: 'Marco grew up in Bologna, Italy, learning pasta-making from his grandmother.',
      date: '2026-03-02',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
      category: 'Italian',
      readTime: 7,
      tags: ['Pasta', 'Italian', 'Homemade', 'Techniques']
    },
    {
      id: 5,
      title: 'Exploring Asian Flavors: Umami and Beyond',
      excerpt: 'Dive into the rich world of Asian cuisine.',
      content: `Asian cuisine encompasses a vast array of flavors, techniques, and ingredients. Understanding the concept of umami is key to mastering these cuisines.

## Understanding Umami

Umami, the "fifth taste," is that savory, satisfying quality found in foods rich in glutamates. Key umami ingredients include:

- **Japanese:** Dashi, miso, soy sauce, kombu
- **Chinese:** Fermented black beans, oyster sauce
- **Korean:** Gochujang, doenjang
- **Thai:** Fish sauce, fermented shrimp paste

## Essential Asian Ingredients

### Soy Sauce
The backbone of Asian cooking. Light for seasoning, dark for color.

### Fish Sauce
Pungent but essential – it adds depth without making food taste fishy.

### Sesame Oil
Toasted sesame oil is a finishing oil – add it at the end for maximum aroma.

### Rice Vinegar
Mild and slightly sweet, perfect for dressings and pickles.

### Ginger and Garlic
The dynamic duo of Asian aromatics.

## Regional Styles

- **Chinese:** Wok hei (breath of the wok), balance of flavors
- **Japanese:** Precision, seasonal ingredients, subtle flavors
- **Korean:** Fermentation, bold spices
- **Thai:** Balance of sweet, sour, salty, spicy`,
      author: 'Yuki Tanaka',
      authorBio: 'Yuki is a Japanese chef specializing in pan-Asian cuisine and fermentation.',
      date: '2026-03-01',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800',
      category: 'Asian',
      readTime: 9,
      tags: ['Asian', 'Umami', 'Ingredients', 'Techniques']
    },
    {
      id: 6,
      title: 'Baking Basics: From Sourdough to Croissants',
      excerpt: 'Master the art of baking.',
      content: `Baking is both an art and a science. Understanding the fundamentals will help you create everything from simple cookies to complex laminated pastries.

## The Science of Baking

Baking relies on precise ratios and chemical reactions:
- **Flour** provides structure through gluten
- **Sugar** adds sweetness and tenderness
- **Eggs** bind, leaven, and enrich
- **Fat** creates tenderness and flavor
- **Leaveners** (yeast, baking powder, baking soda) create rise

## Mastering Sourdough

Sourdough begins with a starter – a fermented mixture of flour and water.

### Creating Your Starter
1. Mix equal parts flour and water
2. Feed daily for 7-14 days
3. Wait until it doubles in 4-6 hours
4. Now you're ready to bake!

### The Process
- **Autolyse** - Rest flour and water before adding starter
- **Stretch and fold** - Develop gluten gently
- **Bulk fermentation** - First rise (4-12 hours)
- **Shape** - Create surface tension
- **Final proof** - Second rise (2-4 hours)
- **Bake** - In a hot Dutch oven for best results

## Laminated Doughs

Croissants and puff pastry require laminating – folding butter into dough multiple times to create hundreds of layers.`,
      author: 'Emma Davis',
      authorBio: 'Emma is a pastry chef and baking instructor with a passion for teaching beginners.',
      date: '2026-02-28',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800',
      category: 'Baking',
      readTime: 12,
      tags: ['Baking', 'Bread', 'Sourdough', 'Pastries']
    }
  ];

  blog = signal<BlogPost | null>(null);
  relatedBlogs = signal<BlogPost[]>([]);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.allBlogs.find(b => b.id === id);
    if (found) {
      this.blog.set(found);
      // Get related blogs (same category, excluding current)
      const related = this.allBlogs
        .filter(b => b.category === found.category && b.id !== found.id)
        .slice(0, 3);
      this.relatedBlogs.set(related);
    }
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }

  navigateToBlog(id: number): void {
    this.router.navigate(['/blog', id]);
    window.scrollTo(0, 0);
  }

  // Format markdown-like content to HTML
  formatContent(content: string): string {
    return content
      .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
      .replace(/^\*\*(.+)\*\*/g, '<strong>$1</strong>')
      .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
      .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-4">$2</li>')
      .replace(/\n\n/g, '</p><p class="mb-4">')
      .replace(/^(.+)$/gm, '<p class="mb-4">$1</p>');
  }
}
