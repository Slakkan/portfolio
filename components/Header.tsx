import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";

import styles from "../styles/components/Header.module.scss";

const Header = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const getLinkClass = (path: string) => {
        const isActive = path === router.pathname;
        return isActive ? "active" : "";
    };

    const getMenuSrc = useMemo(() => `/icons/${!isOpen ? "menu.svg" : "menu--primary.svg"}`, [isOpen]);

    const getAccordeonClass = useMemo(() => {
        const base = styles.accordion;
        const open = styles["accordion--open"];
        return `${base} ${isOpen ? open : ""}`;
    }, [isOpen]);

    return (
        <div className={styles.header}>
            <div className="container">
                <div className="row align-items-end mb-2">
                    <div className="col-2">
                        <img className={styles.header__logo} src="logo.svg" alt="logo" />
                    </div>
                    <div className="col-8">
                        <nav className="d-none d-md-block">
                            <ul className={styles.nav}>
                                <li className={getLinkClass("/") + " px-2"}>
                                    <Link href="/">Home</Link>
                                </li>
                                <li className={getLinkClass("/skills") + " px-2"}>
                                    <Link href="/skills">Skills</Link>
                                </li>
                                <li className={getLinkClass("/experience") + " px-2"}>
                                    <Link href="/experience">Experience</Link>
                                </li>
                                <li className={getLinkClass("/about-me") + " px-2"}>
                                    <Link href="/about-me">About Me</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-2 d-flex d-md-none justify-content-end">
                        <img
                            className={styles.header__menu}
                            onClick={() => setIsOpen((prev) => !prev)}
                            src={getMenuSrc}
                            alt="menu"
                        />
                    </div>
                </div>
            </div>
            <nav className="d-md-none">
                <ul className={getAccordeonClass}>
                    <li className={getLinkClass("/") + " py-2"}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={getLinkClass("/skills") + " py-2"}>
                        <Link href="/skills">Skills</Link>
                    </li>
                    <li className={getLinkClass("/experience") + " py-2"}>
                        <Link href="/experience">Experience</Link>
                    </li>
                    <li className={getLinkClass("/about-me") + " py-2"}>
                        <Link href="/about-me">About Me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
