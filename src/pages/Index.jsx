import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Index = () => {
  const [endpoint, setEndpoint] = useState("hw-red-panda-123456");
  const [customer, setCustomer] = useState("");

  return (
    <div className="container mx-auto p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <label htmlFor="endpoint" className="block text-sm font-medium">
            Endpoint:
          </label>
          <Input
            id="endpoint"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="w-64"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="monitorDataLayer" />
          <label
            htmlFor="monitorDataLayer"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Monitor DataLayer
          </label>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <label htmlFor="customer" className="block text-sm font-medium">
            Customer:
          </label>
          <Input
            id="customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="w-64"
          />
        </div>
        <Button variant="outline">Reset</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Discount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>SKU-4577-736 Sneakers</TableCell>
            <TableCell>1</TableCell>
            <TableCell>123456</TableCell>
            <TableCell>4568</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-1">
            <p className="text-sm font-medium">Shipping</p>
            <Input type="number" defaultValue={0} />
            <Input type="number" defaultValue={0} />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Handling</p>
            <Input type="number" defaultValue={0} />
            <Input type="number" defaultValue={0} />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Payment</p>
            <Input type="number" defaultValue={0} />
            <Input type="number" defaultValue={0} />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Other Discounts</p>
            <Input type="number" defaultValue={0} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm font-medium mb-1">Type</p>
            <Select defaultValue="AIRMEE">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AIRMEE">AIRMEE</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Type</p>
            <Select defaultValue="DEFAULT">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DEFAULT">DEFAULT</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <p className="text-sm font-medium mb-1">Type</p>
            <Select defaultValue="KLARNA">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="KLARNA">KLARNA</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full">Predict</Button>
      </div>
    </div>
  );
};

export default Index;
