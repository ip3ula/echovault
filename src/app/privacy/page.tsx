import Headline from "../ui/components/Headline";
import Paragraph from "../ui/components/Paragraph";

export default function Page() {
  return (
    <div className="py-20 flex justify-center sm:py-40">
      <div className="w-[90vw] sm:w-[70vw] grid flex-col-1 lg:grid-cols-3 border border-node">
        <div className="bg-roseWater p-5 lg:col-span-1">
          <Headline text="Privacy Policy" />
        </div>

        <div className="bg-sageGreen p-5 lg:col-span-2 text-white space-y-4">
          <Paragraph text="At Echo Vault, your memories are personal — and we treat them that way. We’re committed to protecting your privacy and ensuring your data stays secure." />

          <Paragraph text="We collect only the information we need to provide our service, including your name, email, and password (securely encrypted), the content of your capsules, and your account activity such as login dates or when you seal capsules." />

          <Paragraph text="We use your information to create and manage your account, save your capsules and display them only to you (unless you choose to make them public), and to improve Echo Vault and offer support." />

          <Paragraph text="Your capsules are private by default. Only you can see them. Public capsules are visible to others only if you explicitly choose to make them public. We never sell or share your content with advertisers or third parties." />

          <Paragraph text="You can view, edit, or delete your account and capsules at any time. You may also request that we delete your data completely or export your capsule content upon request." />

          <Paragraph text="We use encryption and secure databases to protect your memories and personal data." />

          <Paragraph text="We’ll notify you if we make significant changes to this policy. You’ll always find the latest version on this page." />
        </div>
      </div>
    </div>
  );
}
