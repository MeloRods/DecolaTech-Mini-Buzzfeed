import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  currentStep = 0;

  constructor(public quizService: QuizService) {}

  selectOption(score: number) {
      const trait = this.quizService.questions[this.currentStep].trait;
      this.quizService.recordSelection(trait, score);
      this.currentStep++;
  }

  get isQuizComplete(): boolean {
      return this.currentStep >= this.quizService.questions.length;
  }

  restartQuiz() {
      this.currentStep = 0;
      this.quizService.resetSelections();
  }
}