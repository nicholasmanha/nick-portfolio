import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";

function Leadviver() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center">
          <Text variant="h1">
            <Text variant="h1" color="primary" as="span">
              Web{" "}
            </Text>
            Software Engineer
          </Text>
          <Text variant="h4">Terence Davis & Associates</Text>
          <Text>May 2024 - Aug 2024</Text>
          <div className="flex mt-4 gap-4">
            <Button
              link={
                "https://blueskyproject.io/finch/?path=/docs/bluesky-components-reactedm--docs"
              }
              newTab
              variant="outline"
            >
              DOCS
            </Button>
            <Button
              link={"https://github.com/bluesky/finch"}
              newTab
              variant="outline"
            >
              CODE
            </Button>
          </div>
        </div>
        <div className="mb-16">
            <Text variant="h2" emphasis className="mb-4">
              What I did
            </Text>
            <Text>I was a lead developer on a CRM software/platform for real estate investors to purchase “dead” leads from sellers & for lead owners to sell to investors.</Text>
            <div className="mb-8">


              
            </div>
            <div className="mb-8">
              <Text variant="h4">
                Primary {" "}
                <Text as="span" variant="h4" color="primary">
                  Duties
                </Text>
              </Text>
              <div className="pl-2">
                  <Text className="-mb-2" variant="h4">1. <Text as="span">Requirements gathering</Text></Text> 
                  <Text className="-mb-2" variant="h4">2. <Text as="span">UI Design & architecture design</Text></Text> 
                  <Text className="-mb-2" variant="h4">3. <Text as="span">Frontend Development</Text></Text> 
                  <Text className="-mb-2" variant="h4">4. <Text as="span">Backend and database implementation</Text></Text> 
              </div>
            </div>
            
          </div>
      </div>
    </>
  );
}

export default Leadviver;
