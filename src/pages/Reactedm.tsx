import { Button } from "@/components/ui/button";
import Text from "@/components/ui/Text";
import ALS from "@/assets/ALS.png";

function Reactedm() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Text variant="h1">
          <Text variant="h1" color="primary" as="span">
            Software Engineer{" "}
          </Text>
          Intern
        </Text>
        <Text variant="h4">Lawrence Berkeley National Lab</Text>
        <Text>May 2017 - Dec 2025</Text>
        <div className="flex">
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
        <img src={ALS}></img>
      </div>
    </>
  );
}

export default Reactedm;
