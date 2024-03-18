import { render } from "@testing-library/react";
import Footer from "./footer-comp";
import footerLogo from "../asset/hackernews-footer.svg"; 

describe("Footer component", () => {
  test("renders the logo image", () => {
    const { getByAltText } = render(<Footer />);
    const logoImage = getByAltText('Vector');
    expect(logoImage).toBeInTheDocument();
    
    const expectedSrc = footerLogo;
    expect(logoImage).toHaveAttribute('src', expectedSrc);
    expect(logoImage).toHaveAttribute('alt', 'Vector');
  });
});



