import type { useSignIn } from "@clerk/clerk-react";

const SignInOAuthButtons = () => {
  const { signIn, isLoaded } = useSignIn();
  return <div>SignInOAuthButtons</div>;
};

export default SignInOAuthButtons;
 