import logo from "../../assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Personal Finance Calculator Logo" />
      <h1>Personal Finance Calculators</h1>
    </header>
  );
}
