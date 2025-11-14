export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-memorial-darker border-t border-memorial-gray-800 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-memorial-gray-400 mb-2">
            In loving memory of John R. Sosoka Jr
          </p>
          <p className="text-memorial-gray-500 text-sm">
            1953 - 2021
          </p>
          <p className="text-memorial-gray-600 text-xs mt-4">
            {currentYear} • Neuroboy Memorial
          </p>
        </div>
      </div>
    </footer>
  )
}
