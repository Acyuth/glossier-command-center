# Glossier Market Intelligence Command Center

Welcome to the Glossier Market Intelligence Dashboard! This project is a comprehensive data visualizer and strategy tool built for a final project at ESSEC Business School.

## What is this?

Think of this as a "Command Center" for marketing executives. It simulates what happens when a company uses Artificial Intelligence to constantly read millions of data points across the internet and visually presents them so that a team can make quick, strategic decisions.

We look at two imaginary AI "Agents" working behind the scenes:
1. **The NLP (Natural Language Processing) Agent:** This bot "reads" Sephora reviews and Reddit threads to figure out exactly what people are saying about Glossier, Rare Beauty, and Milk Makeup. For example, it detects if people are complaining about a blush being too sheer.
2. **The Vision Agent:** This bot "watches" TikTok videos using computer vision to see what visual aesthetics are trending (e.g., is the "Clean Girl" look dying out while "Bold Pigment" rises?).

## How it Works

The project is split into two halves:

* **The Backend (The Brains):** In the `backend/` folder, there are Python scripts that synthesize and generate all of this trend data. They crunch the imaginary numbers and export them into simple data files (JSON).
* **The Frontend (The Face):** In the `frontend/` folder, we have a beautiful dashboard built with **Next.js**, **React**, and **Tailwind CSS**. It takes those simple data files and turns them into the interactive charts and graphs you see on the screen.

### The "Execute Strategy" Button

At the top of the dashboard, there is a button that lets you toggle between a **Before** and **After** state:
- **Before:** Shows the data *before* the company realized they were losing market share to highly pigmented competitor blushes.
- **After:** Shows the data *after* the marketing and product teams pivoted their strategy (like making bolder ads or launching a new product), demonstrating a successful turnaround in sentiment and market share!

## How to Run It Locally

If you have downloaded this code and want to run it on your own computer:

1. Open your terminal.
2. Navigate into the frontend folder:
   ```bash
   cd frontend
   ```
3. Install the required dependencies (if you haven't already):
   ```bash
   npm install
   ```
4. Start the local server:
   ```bash
   npm run dev
   ```
5. Open your web browser and go to `http://localhost:3000`.

## Built With

* **Next.js & React:** For handling the website structure and interactivity.
* **Tailwind CSS:** For the premium, Glossier-inspired styling (lots of Glossier Pink & Red!).
* **Recharts:** For the dynamic, animated data visualizations.
* **Python:** For the backend data compilation engine.
