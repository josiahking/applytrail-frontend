import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '@/app/signup/page';
import userEvent from "@testing-library/user-event";

describe("Signup Page", () => {
    test("renders signup form inputs", () => {
        render(<Page />);
        expect(screen.getByPlaceholderText(/you@example.com/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/••••••••/i)).toBeInTheDocument();
    });

    test("allows typing into email input", async () => {
        render(<Page />);
        const emailInput = screen.getByPlaceholderText(/you@example.com/i);
        await userEvent.type(emailInput, "test@example.com");
        expect(emailInput).toHaveValue("test@example.com");
    });
});