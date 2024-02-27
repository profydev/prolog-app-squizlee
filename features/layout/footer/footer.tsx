import styles from "./footer.module.scss";

type Props = {
  version: string;
};

export function Footer({ version }: Props) {
  const links = [
    { name: "Docs", href: "#" },
    { name: "API", href: "#" },
    { name: "Help", href: "#" },
    { name: "Community", href: "#" },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.version}>Version: {version}</div>
      <div className={styles.links}>
        {links.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </div>
      <img className={styles.logo} src="/icons/logo-small.svg" alt="logo" />
    </div>
  );
}
