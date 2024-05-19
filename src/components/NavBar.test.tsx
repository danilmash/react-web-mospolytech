import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("NavBar", () => {
  test("Появление дополнительных ссылок при входе", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText("Войти"));

    // Предположим, что при входе должны появиться ссылки "Профиль" и "Выход"
    expect(screen.getByText("Выйти")).toBeInTheDocument();
  });
});
