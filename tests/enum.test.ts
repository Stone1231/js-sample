import { EnumTestType } from '../src/enum';

class EnumTest {
  // public readonly enumTestType = EnumTestType; 
  public getType(){
    return EnumTestType.TYPE2;
  }  
}


test('EnumTest', () => {
  let enumTest = new EnumTest();
  // Arrange
  let expected: number = enumTest.getType();

  // Act
  let actual: number = 1;

  // Assert
  expect(actual).toBe(EnumTestType.TYPE2);
});