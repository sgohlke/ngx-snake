import { ScoreEntryDto } from '../../api/models/score-entry-dto';
import { ScoreMocks } from '../mocks/score-mocks';
import { LevelScoresPipe } from './level-scores.pipe';

describe('LevelScoresPipe', () => {
  let pipe: LevelScoresPipe;

  beforeEach(() => {
    pipe = new LevelScoresPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all entries of level beginner', () => {
    expect(pipe.transform(ScoreMocks, 'beginner')).toEqual([...ScoreMocks.filter((score: ScoreEntryDto) => score.level === 'beginner')]);
  });

  it('should return all entries of level advanced', () => {
    expect(pipe.transform(ScoreMocks, 'advanced')).toEqual([...ScoreMocks.filter((score: ScoreEntryDto) => score.level === 'advanced')]);
  });

  it('should return all entries of level export', () => {
    expect(pipe.transform(ScoreMocks, 'export')).toEqual([...ScoreMocks.filter((score: ScoreEntryDto) => score.level === 'export')]);
  });

});
