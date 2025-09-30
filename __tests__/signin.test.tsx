import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '@/app/signin/page';

describe("Signin Page", () => {
    test("renders signin form inputs", () => {
        render(<Page />);
        expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    });

    test("renders submit button", () => {
        render(<Page />);
        expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
    });
});