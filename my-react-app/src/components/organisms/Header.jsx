import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../../features/catalog/pages/AboutPage';
const HomePage = lazy(() => import('src/features/catalog/pages/HomePage'));
const CategoryPage = lazy(() => import('src/features/catalog/pages/CategoryPage'));
const ProductPage = lazy(() => import('src/features/catalog/pages/ProductPage'));
const CartPage = lazy(() => import('src/features/cart/pages/CartPage'));
const CheckoutPage = lazy(() => import('src/features/cart/pages/CheckoutPage'));
const LoginPage = lazy(() => import('src/features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('src/features/auth/pages/RegisterPage'));

export default function Header() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Suspense>
  );
}
