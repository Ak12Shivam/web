import { Layout } from "@/components/layout";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing or using RunWars (the "App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App. These Terms constitute a legally binding agreement between you and RunWars.`,
  },
  {
    title: "2. Eligibility",
    body: `You must be at least 13 years of age to use RunWars. By using the App, you represent and warrant that you meet this age requirement. Users under the age of 18 must have parental or guardian consent.`,
  },
  {
    title: "3. User Accounts",
    body: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify RunWars immediately of any unauthorized use of your account. RunWars reserves the right to terminate accounts at its discretion.`,
  },
  {
    title: "4. Gameplay & Fair Use",
    body: `RunWars is a GPS-based territorial game. You agree not to use GPS spoofing, bots, scripts, modified clients, or any other method to gain an unfair advantage. Violations will result in permanent account suspension. Territory capture must reflect genuine physical movement.`,
  },
  {
    title: "5. Intellectual Property",
    body: `All content, including but not limited to the RunWars name, logo, hex-grid design, game mechanics, and visual assets, are the exclusive intellectual property of RunWars. All rights reserved. You may not reproduce, distribute, or create derivative works without express written permission.`,
  },
  {
    title: "6. Prohibited Conduct",
    body: `You agree not to: harass, threaten, or abuse other players; post illegal, offensive, or harmful content; attempt to reverse-engineer the App; interfere with the App's servers or infrastructure; or engage in any activity that disrupts the gameplay experience for others.`,
  },
  {
    title: "7. In-App Purchases & Premium",
    body: `RunWars may offer premium features and in-app purchases. All purchases are final unless otherwise required by applicable law. RunWars reserves the right to modify, suspend, or discontinue any premium features with reasonable notice.`,
  },
  {
    title: "8. Disclaimers",
    body: `RunWars is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service, accuracy of GPS data, or that the App will be free of errors. RunWars is not responsible for any injuries, accidents, or damages resulting from real-world movement during gameplay.`,
  },
  {
    title: "9. Safety",
    body: `Always be aware of your surroundings while playing. Do not play in dangerous areas, cross roads unsafely, or trespass on private property. RunWars is not liable for any physical harm resulting from use of the App. Play responsibly.`,
  },
  {
    title: "10. Limitation of Liability",
    body: `To the maximum extent permitted by law, RunWars shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App. Our total liability to you shall not exceed the amount paid by you to RunWars in the twelve months preceding the claim.`,
  },
  {
    title: "11. Changes to Terms",
    body: `RunWars reserves the right to modify these Terms at any time. We will notify users of material changes via the App or email. Continued use of the App after changes constitutes acceptance of the new Terms.`,
  },
  {
    title: "12. Governing Law",
    body: `These Terms are governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration, except where prohibited by law.`,
  },
  {
    title: "13. Contact",
    body: `For questions regarding these Terms, contact us at legal@runwars.app. RunWars is committed to responding to all legal inquiries within 30 business days.`,
  },
];

export default function Terms() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Terms of Service</h1>
          <p className="text-muted-foreground font-mono text-sm">
            Effective date: January 1, 2025 &mdash; All rights reserved &copy; RunWars
          </p>
        </motion.div>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="border-b border-border pb-10 last:border-0"
            >
              <h2 className="text-lg font-bold uppercase tracking-wider mb-3 text-primary">{section.title}</h2>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">{section.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-card border border-border rounded-xl font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} RunWars. All rights reserved. RunWars and its associated marks, logos, and game systems are the exclusive property of RunWars.
        </div>
      </div>
    </Layout>
  );
}
