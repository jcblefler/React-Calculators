import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);

  const initialInvestmentVal =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterestVal =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestmentVal;

          const totalInvestmentVal = yearData.valueEndOfYear - totalInterestVal;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterestVal)}</td>
              <td>{formatter.format(totalInvestmentVal)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
