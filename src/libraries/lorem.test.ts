import Lorem from './lorem';

describe('Lorem', () => {
  describe('word', () => {
    it('should return a single word', () => {
      const result = Lorem.word();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return different words', () => {
      const results = new Set<string>();
      for (let i = 0; i < 20; i++) {
        results.add(Lorem.word());
      }
      expect(results.size).toBeGreaterThan(1);
    });

    it('should return lowercase words', () => {
      const result = Lorem.word();
      expect(result).toBe(result.toLowerCase());
    });
  });

  describe('words', () => {
    it('should return 3 words by default', () => {
      const result = Lorem.words();
      expect(result).toHaveLength(3);
    });

    it('should return specified number of words', () => {
      const count = 7;
      const result = Lorem.words(count);
      expect(result).toHaveLength(count);
    });

    it('should return array of strings', () => {
      const result = Lorem.words(5);
      result.forEach(word => {
        expect(typeof word).toBe('string');
        expect(word.length).toBeGreaterThan(0);
      });
    });

    it('should handle edge case of 0 words', () => {
      const result = Lorem.words(0);
      expect(result).toHaveLength(0);
    });
  });

  describe('sentence', () => {
    it('should return a sentence', () => {
      const result = Lorem.sentence();
      expect(typeof result).toBe('string');
      expect(result).toMatch(/^[A-Z].*\.$/);
    });

    it('should start with capital letter', () => {
      const result = Lorem.sentence();
      expect(result[0]).toMatch(/[A-Z]/);
    });

    it('should end with period', () => {
      const result = Lorem.sentence();
      expect(result.endsWith('.')).toBe(true);
    });

    it('should have specified word count', () => {
      const wordCount = 5;
      const result = Lorem.sentence(wordCount);
      const words = result.replace('.', '').split(' ');
      expect(words).toHaveLength(wordCount);
    });

    it('should vary in length when no word count specified', () => {
      const lengths = new Set<number>();
      for (let i = 0; i < 20; i++) {
        const result = Lorem.sentence();
        const words = result.replace('.', '').split(' ');
        lengths.add(words.length);
      }
      expect(lengths.size).toBeGreaterThan(1);
    });
  });

  describe('sentences', () => {
    it('should return 3 sentences by default', () => {
      const result = Lorem.sentences();
      const sentenceArray = result.match(/[^.]+\./g);
      expect(sentenceArray).toHaveLength(3);
    });

    it('should return specified number of sentences', () => {
      const count = 5;
      const result = Lorem.sentences(count);
      const sentenceArray = result.match(/[^.]+\./g);
      expect(sentenceArray).toHaveLength(count);
    });

    it('should separate with specified separator', () => {
      const result = Lorem.sentences(3, '\n');
      expect(result).toContain('\n');
    });

    it('should use space as default separator', () => {
      const result = Lorem.sentences(2);
      expect(result).toContain('. ');
    });
  });

  describe('paragraph', () => {
    it('should return a paragraph', () => {
      const result = Lorem.paragraph();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should contain multiple sentences', () => {
      const result = Lorem.paragraph();
      const sentences = result.match(/[^.]+\./g);
      expect(sentences).not.toBeNull();
      expect(sentences!.length).toBeGreaterThanOrEqual(3);
    });

    it('should have specified sentence count', () => {
      const sentenceCount = 4;
      const result = Lorem.paragraph(sentenceCount);
      const sentences = result.match(/[^.]+\./g);
      expect(sentences).toHaveLength(sentenceCount);
    });
  });

  describe('paragraphs', () => {
    it('should return 3 paragraphs by default', () => {
      const result = Lorem.paragraphs();
      const paraArray = result.split('\n\n');
      expect(paraArray).toHaveLength(3);
    });

    it('should return specified number of paragraphs', () => {
      const count = 5;
      const result = Lorem.paragraphs(count);
      const paraArray = result.split('\n\n');
      expect(paraArray).toHaveLength(count);
    });

    it('should separate with specified separator', () => {
      const result = Lorem.paragraphs(2, '\n---\n');
      expect(result).toContain('\n---\n');
    });

    it('should use double newline as default separator', () => {
      const result = Lorem.paragraphs(2);
      expect(result).toContain('\n\n');
    });
  });

  describe('text', () => {
    it('should return text with multiple sentences', () => {
      const result = Lorem.text();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should have specified sentence count', () => {
      const count = 7;
      const result = Lorem.text(count);
      const sentences = result.match(/[^.]+\./g);
      expect(sentences).toHaveLength(count);
    });

    it('should vary in length when no count specified', () => {
      const lengths = new Set<number>();
      for (let i = 0; i < 10; i++) {
        const result = Lorem.text();
        const sentences = result.match(/[^.]+\./g);
        lengths.add(sentences!.length);
      }
      expect(lengths.size).toBeGreaterThan(1);
    });
  });

  describe('lines', () => {
    it('should return 3 lines by default', () => {
      const result = Lorem.lines();
      const lineArray = result.split('\n');
      expect(lineArray).toHaveLength(3);
    });

    it('should return specified number of lines', () => {
      const count = 5;
      const result = Lorem.lines(count);
      const lineArray = result.split('\n');
      expect(lineArray).toHaveLength(count);
    });

    it('should separate lines with newline', () => {
      const result = Lorem.lines(2);
      expect(result).toContain('\n');
    });

    it('should have each line end with period', () => {
      const result = Lorem.lines(3);
      const lines = result.split('\n');
      lines.forEach(line => {
        expect(line.endsWith('.')).toBe(true);
      });
    });
  });

  describe('slug', () => {
    it('should return a slug with 3 words by default', () => {
      const result = Lorem.slug();
      const words = result.split('-');
      expect(words).toHaveLength(3);
    });

    it('should return a slug with specified word count', () => {
      const count = 5;
      const result = Lorem.slug(count);
      const words = result.split('-');
      expect(words).toHaveLength(count);
    });

    it('should be lowercase', () => {
      const result = Lorem.slug();
      expect(result).toBe(result.toLowerCase());
    });

    it('should use hyphens as separators', () => {
      const result = Lorem.slug();
      expect(result).toContain('-');
    });

    it('should not contain spaces', () => {
      const result = Lorem.slug();
      expect(result).not.toContain(' ');
    });
  });

  describe('supplemental', () => {
    it('should return a supplemental word', () => {
      const result = Lorem.supplemental();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should return different supplemental words', () => {
      const results = new Set<string>();
      for (let i = 0; i < 20; i++) {
        results.add(Lorem.supplemental());
      }
      expect(results.size).toBeGreaterThan(1);
    });
  });

  describe('supplementalWords', () => {
    it('should return 3 supplemental words by default', () => {
      const result = Lorem.supplementalWords();
      expect(result).toHaveLength(3);
    });

    it('should return specified number of supplemental words', () => {
      const count = 7;
      const result = Lorem.supplementalWords(count);
      expect(result).toHaveLength(count);
    });

    it('should return array of strings', () => {
      const result = Lorem.supplementalWords(5);
      result.forEach(word => {
        expect(typeof word).toBe('string');
        expect(word.length).toBeGreaterThan(0);
      });
    });
  });

  describe('supplementalSentence', () => {
    it('should return a supplemental sentence', () => {
      const result = Lorem.supplementalSentence();
      expect(typeof result).toBe('string');
      expect(result).toMatch(/^[A-Z].*\.$/);
    });

    it('should start with capital letter', () => {
      const result = Lorem.supplementalSentence();
      expect(result[0]).toMatch(/[A-Z]/);
    });

    it('should end with period', () => {
      const result = Lorem.supplementalSentence();
      expect(result.endsWith('.')).toBe(true);
    });

    it('should have specified word count', () => {
      const wordCount = 5;
      const result = Lorem.supplementalSentence(wordCount);
      const words = result.replace('.', '').split(' ');
      expect(words).toHaveLength(wordCount);
    });
  });

  describe('supplementalParagraph', () => {
    it('should return a supplemental paragraph', () => {
      const result = Lorem.supplementalParagraph();
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should contain multiple sentences', () => {
      const result = Lorem.supplementalParagraph();
      const sentences = result.match(/[^.]+\./g);
      expect(sentences).not.toBeNull();
      expect(sentences!.length).toBeGreaterThanOrEqual(3);
    });

    it('should have specified sentence count', () => {
      const sentenceCount = 4;
      const result = Lorem.supplementalParagraph(sentenceCount);
      const sentences = result.match(/[^.]+\./g);
      expect(sentences).toHaveLength(sentenceCount);
    });
  });
});

