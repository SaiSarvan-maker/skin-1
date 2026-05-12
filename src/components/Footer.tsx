import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Single row layout — Pattern 7: Arc Browser Split */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <AppLogo
                src="/assets/images/2025-12-20-1778590561486.webp"
                size={36}
                className="rounded-lg"
              />
              <div>
                <span className="font-bold text-sm text-foreground">Vipula Hair & Skin Clinic</span>
                <p className="text-xs text-muted-foreground">Vijayawada, Andhra Pradesh</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground max-w-xs">
              35+ years of specialist dermatology, cosmetology, and advanced skin & hair care.
            </p>
          </div>

          {/* Center: Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' },
            ]?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Right: Social + contact */}
          <div className="flex flex-col gap-3 items-start md:items-end">
            <div className="flex items-center gap-3">
              <a
                href="tel:+918662455999"
                className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300"
                aria-label="Call clinic"
              >
                <Icon name="PhoneIcon" size={16} />
              </a>
              <a
                href="https://wa.me/918662455999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <Icon name="ChatBubbleLeftEllipsisIcon" size={16} />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2025 Vipula Clinic. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}