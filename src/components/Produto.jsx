import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import imgcard1 from "../assets/img-cards/img-card-1.jpg";
import imgcard2 from "../assets/img-cards/img-card-2.jpg";
import imgcard3 from "../assets/img-cards/img-card-3.jpg";
import imgcard4 from "../assets/img-cards/img-card-4.jpg";
import imgcard5 from "../assets/img-cards/img-card-5.jpg";

export function CardDefault() {
  return (
    <div id="produtos" className="pt-10">
      <h1 className="font-bold text-gray-600 flex justify-center text-2xl">PRODUTOS</h1>
      <div className="flex justify-center flex-wrap">
        <Card className="mt-6 w-96 p-2">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              style={{ width: 400, height: 200 }}
              src={imgcard1}
              alt="React Logo"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 p-2">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              style={{ width: 400, height: 200 }}
              src={imgcard2}
              alt="React Logo"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 p-2">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              style={{ width: 400, height: 200 }}
              src={imgcard3}
              alt="React Logo"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 p-2">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              style={{ width: 400, height: 200 }}
              src={imgcard4}
              alt="React Logo"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 p-2">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              style={{ width: 400, height: 200 }}
              src={imgcard5}
              alt="React Logo"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
