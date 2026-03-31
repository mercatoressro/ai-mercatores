import { useEffect } from "react";

const CliqSalesForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.cliqsales.cz/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <iframe
          src="https://api.cliqsales.cz/widget/form/w0Brv6yuo3WXpKr8ykqT"
          style={{ width: "100%", height: "801px", border: "none", borderRadius: "3px" }}
          id="inline-w0Brv6yuo3WXpKr8ykqT"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form 1"
          data-height="801"
          data-layout-iframe-id="inline-w0Brv6yuo3WXpKr8ykqT"
          data-form-id="w0Brv6yuo3WXpKr8ykqT"
          title="Form 1"
        />
      </div>
    </section>
  );
};

export default CliqSalesForm;
