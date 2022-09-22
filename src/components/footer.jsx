import React from 'react'

const Footer = () => {
  return (
    <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >

    <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot;
          {` `} Made with ❤️ from Kerck 148
        </footer>
    </div>
  )
}

export default Footer