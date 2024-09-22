import { exportAsMessages } from "../helpers.ts";

export default exportAsMessages({
  extensionName: "uBlacklist",
  extensionDescription: "Blokuj wybrane witryny w wynikach wyszukiwania Google",
  lang: "pl",
  error: "Błąd: $1",
  unauthorizedError:
    "Błąd autoryzacji. Wyłącz i włącz synchronizację, aby spróbować ponownie.",
  cancelButton: "Anuluj",
  okButton: "OK",
  content_singleSiteBlocked: "Rozszerzenie uBlacklist zablokowało 1 witrynę",
  content_multipleSitesBlocked: "Rozszerzenie uBlacklist zablokowało $1 witryn",
  content_showBlockedSitesLink: "Pokaż",
  content_hideBlockedSitesLink: "Schowaj",
  content_blockSiteLink: "Zablokuj witrynę",
  content_unblockSiteLink: "Odblokuj witrynę",
  popup_blockSiteTitle: "Zablokuj tę witrynę",
  popup_unblockSiteTitle: "Odblokuj tę witrynę",
  popup_details: "Szczegóły",
  popup_pageURLLabel: "URL strony",
  popup_pathDepth: "Głębokość ścieżki",
  popup_pageTitleLabel: "Tytuł strony",
  popup_addedRulesLabel: "Reguły do dodania",
  popup_removedRulesLabel: "Reguły do usunięcia",
  popup_blockSiteButton: "Zablokuj",
  popup_unblockSiteButton: "Odblokuj",
  popup_openOptionsLink: "Ustawienia",
  popup_active: "Rozszerzenie uBlacklist jest aktywne",
  popup_inactive: "Rozszerzenie uBlacklist jest nieaktywne",
  popup_activateButton: "Aktywuj",
  options_generalTitle: "Ogólne",
  options_blacklistLabel: "Witryny zablokowane w wynikach wyszukiwania Google",
  options_blacklistHelper:
    "Możesz użyć [wzorców dopasowania](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) lub [wyrażeń regularnych](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).",
  options_blacklistExample: "Przykład: $1",
  options_blockByTitle:
    'Aby zablokować witryny według tytułu strony, dodaj "title" przed wyrażeniem regularnym.',
  options_blacklistUpdated: "Zaktualizowano",
  options_reloadBlacklistButton: "Odśwież",
  options_importBlacklistButton: "Importuj",
  options_exportBlacklistButton: "Eksportuj",
  options_saveBlacklistButton: "Zapisz",
  options_importBlacklistDialog_title: "Importuj",
  options_importBlacklistDialog_fromFile: "Importuj z pliku",
  options_importBlacklistDialog_selectFile: "Wybierz plik",
  options_importBlacklistDialog_fromPB:
    "Importuj z Personalnej listy blokowania",
  options_importBlacklistDialog_pbLabel: "Domeny",
  options_importBlacklistDialog_append: "Dołącz do istniejącej listy",
  options_importBlacklistDialog_importButton: "Importuj",
  options_importBlacklistDialog_helper:
    "Wklej domeny wyeksportowane z Personalnej listy blokowania.",
  options_otherSearchEngines: "Inne wyszukiwarki",
  options_otherSearchEnginesDescription:
    "Możesz użyć tego rozszerzenia na następujących wyszukiwarkach.",
  options_registerSearchEngine: "Włącz",
  options_searchEngineRegistered: "Włączone",
  options_skipBlockDialogLabel: 'Pomiń dialog "Zablokuj tę witrynę"',
  options_hideBlockLinksLabel: 'Ukryj linki "Zablokuj witrynę"',
  options_hideControlLabel: 'Ukryj liczbę zablokowanych witryn i link "Pokaż"',
  options_blockWholeSiteLabel: "Domyślnie blokuj całą witrynę",
  options_blockWholeSiteDescription:
    'Na przykład, aby zablokować stronę "https://a.b.example.uk.com/", zostanie dodana reguła "*://*.example.uk.com/*".',
  options_appearanceTitle: "Wygląd",
  options_linkColor: "Kolor linków",
  options_blockColor: "Kolor zablokowanych wyników wyszukiwania",
  options_colorUseDefault: "Domyślny",
  options_colorSpecify: "Niestandardowy",
  options_highlightColors: "Kolory podświetlonych wyników wyszukiwania",
  options_highlightDescription:
    'Aby podświetlić wyniki wyszukiwania kolorem N, dodaj "@N" przed regułą.',
  options_highlightColorNth: "Kolor $1",
  options_highlightColorAdd: "Dodaj",
  options_highlightColorRemove: "Usuń",
  options_dialogTheme:
    'Motyw okna dialogowego "Zablokuj tę witrynę" w wynikach wyszukiwania',
  options_dialogThemeDefault: "Domyślny",
  options_dialogThemeLight: "Jasny",
  options_dialogThemeDark: "Ciemny",
  options_syncTitle: "Synchronizacja",
  options_syncFeatureUpdated:
    'Funkcja synchronizacji została zaktualizowana. Aby kontynuować korzystanie z synchronizacji, naciśnij przycisk "Włącz synchronizację".',
  options_syncFeature: "Synchronizuj z chmurą",
  options_syncFeatureDescription:
    "Możesz synchronizować czarne listy pomiędzy urządzeniami za pośrednictwem chmury.",
  options_turnOnSync: "Włącz synchronizację",
  options_turnOnSyncDialog_title: "Włącz synchronizację",
  options_turnOnSyncDialog_turnOnSyncButton: "Włącz",
  options_turnOnSyncDialog_useAltFlow:
    "Otwórz stronę uwierzytelniania w nowej karcie",
  options_turnOnSyncDialog_altFlowDescription:
    "Możesz być poproszony o zezwolenie na dostęp do $1 przed uwierzytelnieniem, ale Twoje dane osobowe NIE zostaną zapisane w tej domenie.",
  options_turnOnSyncDialog_altFlowAuthCodeLabel: "Kod autoryzacyjny",
  options_turnOffSync: "Wyłącz",
  options_syncResult: "Ostatnia synchronizacja",
  options_syncNever: "Nigdy nie zsynchronizowano",
  options_syncRunning: "Synchronizacja…",
  options_syncReloadButton: "Odśwież",
  options_syncNowButton: "Synchronizuj teraz",
  options_syncCategories: "Wybierz dane do synchronizacji",
  options_syncBlocklist: "Zablokowane witryny",
  options_syncGeneral: "Ustawienia ogólne",
  options_syncAppearance: "Wygląd",
  options_syncSubscriptions: "Subskrypcje",
  options_syncInterval: "Interwał synchronizacji",
  options_subscriptionTitle: "Subskrypcja",
  options_subscriptionFeature: "Subskrybuj listy blokowania",
  options_subscriptionFeatureDescription:
    "Jeśli dodasz subskrypcję, listy blokowania będą regularnie pobierane z określonego URL.",
  options_addSubscriptionButton: "Dodaj subskrypcję",
  options_subscriptionNameHeader: "Nazwa",
  options_subscriptionURLHeader: "URL",
  options_subscriptionUpdateResultHeader: "Ostatnia aktualizacja",
  options_subscriptionCheckBoxLabel: "Włączone",
  options_subscriptionMenuButtonLabel: "Menu",
  options_noSubscriptionsAdded: "Nie dodano subskrypcji",
  options_subscriptionUpdateRunning: "Aktualizacja…",
  options_showSubscriptionMenu: "Pokaż",
  options_updateSubscriptionNowMenu: "Aktualizuj teraz",
  options_removeSubscriptionMenu: "Usuń",
  options_updateAllSubscriptionsNowButton: "Aktualizuj wszystkie teraz",
  options_addSubscriptionDialog_title: "Dodaj subskrypcję",
  options_addSubscriptionDialog_nameLabel: "Nazwa",
  options_addSubscriptionDialog_urlLabel: "URL",
  options_addSubscriptionDialog_addButton: "Dodaj",
  options_showSubscriptionDialog_blacklistLabel: "Reguły",
  options_updateInterval: "Interwał aktualizacji",
  options_backupRestoreTitle: "Kopia zapasowa i przywracanie",
  options_backupSettingsLabel: "Kopia zapasowa ustawień",
  options_backupSettingsButton: "Utwórz kopię zapasową",
  options_restoreSettingsLabel: "Przywracanie ustawień",
  options_restoreSettingsButton: "Przywróć",
  options_restoreSettingsInvalidFile: "Nieprawidłowy format pliku.",
  options_initializeSettingsLabel: "Inicializuj ustawienia",
  options_initializeSettingsButton: "Inicjalizuj",
  options_initializeSettingsConfirmation:
    "Czy na pewno chcesz zainicjalizować ustawienia?",
  options_aboutTitle: "O uBlacklist",
  options_aboutVersion: "Wersja",
  options_aboutDocumentation: "Dokumentacja",
  options_aboutReleaseNotes: "Informacje o wydaniu",
  options_aboutPrivacyPolicy: "Polityka prywatności",
  options_aboutThirdPartyNotices:
    "Oświadczenia o prawach autorskich stron trzecich",
  clouds_googleDriveSync: "Synchronizuj z Google Drive",
  clouds_googleDriveSyncDescription:
    "Plik zostanie utworzony w ukrytym przed użytkownikiem folderze aplikacji.",
  clouds_googleDriveSyncTurnedOn: "Zsynchonizowano z Google Drive",
  clouds_dropboxSync: "Synchronizuj z Dropbox",
  clouds_dropboxSyncDescription:
    'Plik zostanie utworzony w folderze "/Apps/uBlacklist/".',
  clouds_dropboxSyncTurnedOn: "Zsynchronizowano z Dropbox",
  searchEngines_googleName: "Google",
  searchEngines_bingName: "Bing",
  searchEngines_bingDescription_firefox:
    'Wyłącz "Otwieraj wyniki wyszukiwania w nowej karcie lub oknie".',
  searchEngines_braveName: "Brave",
  searchEngines_duckduckgoName: "DuckDuckGo",
  searchEngines_ecosiaName: "Ecosia",
  searchEngines_kagiName: "Kagi",
  searchEngines_qwantName: "Qwant",
  searchEngines_searxName: "SearX",
  searchEngines_qwantDescription: 'Wyłącz "Odtwarzaj filmy na Qwant.com".',
  searchEngines_startpageName: "Startpage.com",
  searchEngines_yahooJapanName: "Yahoo! JAPAN",
  searchEngines_yandexName: "Yandex",
});
