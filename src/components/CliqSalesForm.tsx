import { useEffect } from "react";

const CliqSalesForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api.cliqsales.cz/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.parentNode?.removeChild(script);
    };
  }, []);

  return (
    <section className="w-full bg-background relative overflow-hidden py-16 md:py-24">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="rounded-2xl border bg-card/60 backdrop-blur-sm p-2 animate-blue-glow" style={{ borderColor: "hsl(212 70% 55% / 0.3)" }}>
          <iframe
            src="https://api.cliqsales.cz/widget/form/w0Brv6yuo3WXpKr8ykqT"
            style={{ width: "100%", height: "801px", border: "none", borderRadius: "12px" }}
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
      </div>
    </section>
  );
};

export default CliqSalesForm;
