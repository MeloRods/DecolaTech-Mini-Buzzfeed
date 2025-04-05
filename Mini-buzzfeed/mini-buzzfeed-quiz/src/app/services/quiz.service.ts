import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class QuizService {
    questions = [
        { text: 'Eu gosto de experimentar coisas novas.', trait: 'abertura' },
        { text: 'Eu sou muito organizado(a).', trait: 'conscienciosidade' },
        { text: 'Eu me sinto energizado(a) ao estar com outras pessoas.', trait: 'extraversao' },
        { text: 'Eu sou muito gentil e prestativo(a).', trait: 'amabilidade' },
        { text: 'Eu me preocupo muito com as coisas.', trait: 'neuroticismo' }
    ];

    userSelections: { [key: string]: number } = {
      abertura: 0,
      conscienciosidade: 0,
      extroversao: 0,
      amabilidade: 0,
      neuroticismo: 0
    };
    recordSelection(trait: string, score: number) {
        this.userSelections[trait] = score;
    }

    getResult(): { trait: string, comment: string } {
        let maxScore = 0;
        let dominantTrait = 'abertura';; 

        for (const trait in this.userSelections) {
            const score = this.userSelections[trait];
            if (score > maxScore) {
                maxScore = score;
                dominantTrait = trait;
            }
        }
        return {
            trait: dominantTrait,
            comment: this.getComment(dominantTrait)
        };
    }

  
  private comments: { [key: string]: string} = {
    abertura: "Você é uma pessoa curiosa e criativa! Gosta de explorar novas ideias e experiências, o que te torna um verdadeiro inovador.",
        conscienciosidade: "Você é organizado e responsável! Sua dedicação e foco fazem de você alguém confiável e eficiente.",
        extraversao: "Você é extrovertido e sociável! Adora estar com outras pessoas e traz energia para qualquer ambiente.",
        amabilidade: "Você é gentil e cooperativo! Sua empatia e bondade fazem de você um ótimo amigo e companheiro.",
        neuroticismo: "Você é sensível e reflexivo! Sente as emoções profundamente, o que te ajuda a entender melhor o mundo ao seu redor."
    };
  
  getComment(trait: string): string {
    return this.comments[trait];
}

resetSelections() {
    for (const trait in this.userSelections) {
        this.userSelections[trait] = 0;
    }
}
}