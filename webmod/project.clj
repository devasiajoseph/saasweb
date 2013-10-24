(defproject webmod "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [lib-noir "0.6.2"]
                 [compojure "1.1.5"]
                 [ring-server "0.2.8"]
                 [com.taoensso/timbre "2.1.2"]
                 [com.postspectacular/rotor "0.1.0"]
                 [com.taoensso/tower "1.7.1"]
                 [markdown-clj "0.9.26"]
                 [enlive "1.1.4"]
                 [clojurewerkz/cassaforte "1.2.0"]
                 [com.taoensso/carmine "2.2.0"]
                 [crypto-random "1.1.0"]
                 [log4j
                  "1.2.15"
                  :exclusions
                  [javax.mail/mail
                   javax.jms/jms
                   com.sun.jdmk/jmxtools
                   com.sun.jmx/jmxri]]]
  :plugins [[lein-ring "0.8.5"]]
  :ring {:handler webmod.handler/war-handler
         :init    webmod.handler/init
         :destroy webmod.handler/destroy}
  :profiles
  {:production {:ring {:open-browser? false
                       :stacktraces?  false
                       :auto-reload?  true}}
   :dev {:dependencies [[ring-mock "0.1.5"]
                        [ring/ring-devel "1.1.8"]
                        [lein-ring "0.5.4"]]}}
  :min-lein-version "2.0.0"
  :immutant {:context-path "/"
             :nrepl-port 12345
             })