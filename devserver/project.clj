(defproject devserver "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [http-kit "2.1.5"]
                 [compojure "1.1.5"]
                 [enlive "1.1.1"]
                 [korma "0.3.0-RC5"]
                 [org.clojure/tools.cli "0.2.2"]
                 [com.h2database/h2 "1.3.170"]
                 [org.clojure/java.jdbc "0.2.3"]]
  :repositories {"local" ~(str (.toURI (java.io.File. "maven_repository")))}
  :main devserver.core)
