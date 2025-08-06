# Car Trivia Puzzle Game

A modern, responsive Next.js web game that challenges players with automotive trivia questions using a Wordle-style letter input system.

## 🚗 Features

- **10 Random Questions**: Each game presents 10 questions from a pool of 100+ automotive trivia questions
- **Wordle-Style Input**: Letter boxes that match the exact number of letters in each answer
- **Hint System**: One hint available per question with descriptive clues
- **Skip Questions**: Players can skip difficult questions without penalty
- **Performance Tracking**: Comprehensive scoring system with performance labels
- **Screenshot Sharing**: Download and share your results with html2canvas
- **Statistics**: Track your progress with detailed game statistics
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🎮 How to Play

1. **Start a New Game**: Click "Start New Game" to begin with 10 random questions
2. **Answer Questions**: Type your answers in the letter boxes provided
3. **Use Hints**: Get helpful clues when you're stuck (1 hint per question)
4. **Skip if Needed**: Skip questions without penalty if you can't figure them out
5. **View Results**: See your final score, performance rating, and detailed statistics
6. **Share & Download**: Download a screenshot of your results or share your score

## 🏆 Performance Ratings

- **Perfect Car Genius 🏆**: 10/10 with no hints used
- **Certified Car Freak 🔥**: 9-10 correct answers
- **Speed Demon 🏎️**: 8-9 correct answers
- **Car Enthusiast 🚗**: 7-8 correct answers
- **Weekend Racer 🏁**: 6-7 correct answers
- **Casual Driver 🚙**: 5-6 correct answers
- **Rookie Driver 🚗**: Below 5 correct answers

## 🛠 Tech Stack

- **Framework**: Next.js 13+ with App Directory
- **Language**: TypeScript for type safety
- **Styling**: TailwindCSS with shadcn/ui components
- **State Management**: Zustand with persistence
- **Screenshots**: html2canvas for image generation
- **Icons**: Lucide React
- **Data Storage**: localStorage for game progress and statistics

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main game page
│   └── globals.css         # Global styles
├── components/
│   ├── game/
│   │   ├── GameSidebar.tsx    # Left sidebar with game info
│   │   ├── WelcomeScreen.tsx  # Initial welcome screen
│   │   ├── QuestionDisplay.tsx # Question and input display
│   │   ├── LetterInput.tsx    # Individual letter input boxes
│   │   ├── ScorePage.tsx      # Final score and results
│   │   └── AdPlaceholder.tsx  # Advertisement placeholders
│   ├── layout/
│   │   └── Footer.tsx         # Site footer
│   └── ui/                    # shadcn/ui components
├── stores/
│   └── gameStore.ts          # Zustand stores for game state
├── data/
│   └── questions.json        # 100+ trivia questions database
├── types/
│   └── game.ts              # TypeScript type definitions
├── utils/
│   └── screenshot.ts        # Screenshot and sharing utilities
└── lib/
    └── utils.ts             # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern web browser with JavaScript enabled

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd car-trivia-puzzle-game
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Game Data

The game includes 105 carefully crafted automotive trivia questions covering:

- **Car Brands**: Ferrari, BMW, Toyota, Tesla, and more
- **Sports Cars**: Supercars, muscle cars, and performance vehicles
- **Racing**: Formula 1, NASCAR, racing drivers and circuits
- **Technology**: Engines, safety systems, and automotive innovations
- **History**: Classic cars, automotive milestones, and legendary models

### Question Format

Each question includes:
- **Question**: The trivia question text
- **Answer**: The correct answer (can include spaces)
- **Hint**: A helpful clue about the answer
- **Difficulty**: Easy, medium, or hard classification
- **Category**: Subject category for organization

## 🎨 Design Features

- **Clean, Modern UI**: Professional design with excellent typography
- **Responsive Layout**: Optimized for all screen sizes
- **Smooth Animations**: Engaging transitions and micro-interactions
- **Accessible Design**: High contrast ratios and semantic HTML
- **Performance Optimized**: Fast loading and smooth interactions

## 📊 Statistics & Progress

The game tracks comprehensive statistics:
- Total games played
- Best score achieved
- Average score across all games
- Total hints used
- Success rate percentage
- Detailed score history

All data is stored locally using localStorage for privacy and offline functionality.

## 🔧 Customization

### Adding New Questions

Add new questions to `/data/questions.json`:

```json
{
  "id": 106,
  "question": "Your trivia question here",
  "answer": "CORRECT ANSWER",
  "hint": "Helpful hint about the answer",
  "difficulty": "medium",
  "category": "category name"
}
```

### Modifying Performance Labels

Edit the `getPerformanceLabel` function in `/stores/gameStore.ts` to customize rating labels and thresholds.

### Styling Changes

The project uses TailwindCSS. Modify styles in:
- Component files for specific styling
- `/app/globals.css` for global styles
- `/tailwind.config.ts` for theme customization

## 🤝 Contributing

Contributions are welcome! Please feel free to:

1. Add new trivia questions
2. Improve the user interface
3. Add new features
4. Fix bugs or improve performance
5. Enhance accessibility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions, suggestions, or support:
- Email: info@cartriviagame.com
- Website: www.cartriviagame.com

---

**Made with ❤️ for car enthusiasts everywhere!**