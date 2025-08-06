import html2canvas from 'html2canvas';

export const downloadScreenshot = async (elementId: string, filename: string = 'car-trivia-score') => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    const canvas = await html2canvas(element, {
      backgroundColor: '#ffffff',
      scale: 2,
      useCORS: true,
      allowTaint: true,
      foreignObjectRendering: true,
      imageTimeout: 0,
      removeContainer: true,
    });

    // Create download link
    const link = document.createElement('a');
    link.download = `${filename}-${new Date().getTime()}.png`;
    link.href = canvas.toDataURL('image/png', 1.0);
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    return true;
  } catch (error) {
    console.error('Screenshot failed:', error);
    return false;
  }
};

export const shareScore = (scoreData: any) => {
  const shareText = `🚗 Car Trivia Puzzle Game Results 🚗\n\nScore: ${scoreData.score}/10\nRating: ${scoreData.performanceLabel}\nHints Used: ${scoreData.hintsUsed}\n\nPlay now and test your automotive knowledge!`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Car Trivia Puzzle Game',
      text: shareText,
      url: window.location.href,
    }).catch(console.error);
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Score copied to clipboard!');
    }).catch(console.error);
  } else {
    // Fallback - show alert with text
    alert(shareText);
  }
};