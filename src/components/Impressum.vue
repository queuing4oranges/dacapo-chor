<template>
    <div class="impressum-container">
        <h2>Impressum</h2>
        <div class="impressum-content">
            <div class="impressum-col">
                <strong>da capo e.V.</strong>
                <ul>
                    <li>Hauptstraße 156, 02708 Kottmar OT Obercunnersdorf</li>
                    <li>Kontakt: dacapo-chor@web.de</li>
                </ul>
            </div>
            <div class="impressum-col">
                <strong>Vertretungsberechtigter Vorstand</strong>
                <ul>
                    <li>Ricardo Friedrich (1. Vorsitz)</li>
                    <li>Julia Wnetrzak (2. Vorsitz)</li>
                    <li>Anne Sonntag (Schatzmeisterin)</li>
                    <li>Vereinsregister 13968</li>
                </ul>
            </div>
            <div class="impressum-col">
                <strong>Kontoverbindung</strong>
                <ul>
                    <li>Volksbank Löbau-Zittau eG</li>
                    <li>DE21 8559 0100 4564 544006</li>
                </ul>
            </div>
            <div class="impressum-col">
                <strong>Design & Umsetzung</strong>
                <ul>
                    <li>Frontend-Entwicklung: Katja Zenker</li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/katja-zenker"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn-Profil
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.impressum-container {
    color: #046b52;
    display: flex;
    flex-direction: column;
    background-color: #d1f3e2;
    padding: 5rem;
    width: 100%;
    max-width: 100%;

    .impressum-content {
        display: flex;
        justify-content: space-between;

        .impressum-col {
            max-width: 25%;
            ul {
                padding: 0;
                li {
                    list-style: none;

                    a {
                        color: inherit;
                    }
                }
            }
        }
    }
}

@media (max-width: 992px) {
    .impressum-content {
        display: flex;
        flex-direction: column;

        .impressum-col {
            max-width: 100% !important;
        }
    }
}
</style>
