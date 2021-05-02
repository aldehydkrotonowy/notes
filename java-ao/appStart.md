stawianie projektu maven

<localRepository> - folder w którym trzymane są biblioteki które z automatu z poma będą się ściągać. Folder może byc gdziekolwiek, trzeba podać tylko prawidkłowy path

folder .m2/settings.xml - ustawienia applikacji, dostałem gotowe

plik certs.rar, certyfikaty które muszą byc rozmieszczone w różnych folderach
wpisy w stylu
```bash
keytool -import -storepass changeit -noprompt -file "folder/z/certyfikatem/cert.cer" -keystore "folder/docelowy" -alias INFRASTRUCTURE
```
komenda maven instalujaca projekt odpalana z linikomend intellij mvn clean install -P dev -DSkipTest - maven musi byc w path systemu

apka startuje klikajac zieloną strzałkę na marginesie tam gdzie jest main w projekcie
edytowałem też ustawienia "shorten command line" i sustawiłem tam 'java 9+"
dodałem opcje 'add VM options' z parametrami "-Dspring.profiles.active=dev -ea -DisableSecurity=true -DdisableJWTFilter=true"
po tych czynnościach kliknąłem zakładkę Maven z prawej strony w intellij i wybrałem "reload mvn project" - to pomogło i apka sie odpaliła
