const paths = {
  code: 'M8 8 4 12l4 4M16 8l4 4-4 4M14 5l-4 14',
  palette: 'M12 3a9 9 0 1 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h3a6 6 0 0 0 0-12Z',
  shield: 'm12 3 7 3v5c0 4.7-3 8.2-7 10-4-1.8-7-5.3-7-10V6l7-3Zm-3 8 2 2 4-4',
  tools: 'm14.7 6.3 3-3a4 4 0 0 0-5.1 5.1L5 16a2 2 0 1 0 3 3l7.6-7.6a4 4 0 0 0 5.1-5.1l-3 3-3-3Z',
  mail: 'M4 5h16v14H4z M4 6l8 6 8-6',
  github: 'M12 3a9 9 0 0 0-2.8 17.6c.4.1.5-.2.5-.4v-1.7c-2.1.5-2.5-1-2.5-1-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.9 2.2.7.1-.5.3-.9.5-1.1-1.7-.2-3.5-.9-3.5-3.8 0-.8.3-1.5.8-2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.6 7.6 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2 0 2.9-1.8 3.6-3.5 3.8.3.3.5.7.5 1.4v2.1c0 .2.1.5.5.4A9 9 0 0 0 12 3Z',
  download: 'M12 3v11m0 0 4-4m-4 4-4-4M5 20h14',
  external: 'M14 5h5v5m0-5-8 8m-6-6H5v13h13v-5',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
}

function Icon({ name = 'code', size = 18, label }) {
  return (
    <span
      className={`icon icon-${name}`}
      style={{ fontSize: `${size}px` }}
      aria-hidden={label ? undefined : 'true'}
      aria-label={label}
    >
      <svg viewBox="0 0 24 24" focusable="false">
        <path d={paths[name] || paths.code} />
      </svg>
    </span>
  )
}

export default Icon
