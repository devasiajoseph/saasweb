(ns webmod.test.testvalidators
  (:use clojure.test
        ring.mock.request
        webmod.handler
        webmod.core.validators))


;Validators email example
(deftest email-validation 
  (testing "email validation"
  (is (= {:message "Enter a valid email"} (email? "dfddf")))))

(deftest url-validation
  (testing "url validation"
  (is (= {:message "This does not seem like a valid url"} (url? "dfddf")))))


(deftest form-validation 
  (testing "form validation"
    (is  (= 
          (list {:email "Enter a valid email"} 
                {:username "This field is required"}
                {:password "This field is required"}
                )
          (validate 
           [:email (-> "sdfsdfa" required? email? )]
           [:username (-> "" required? )]
           [:password (-> "   " required? )])))))