import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;
/**
 * @Schema class is the representation of the mongodb document structure
 *  ex in node : new mongoose.Schema({ ... }, { timestamps: true })
 * @Prop class is the representation of the field properties.
 * ex in node : { type: Boolean, default: false }
 * @SchemaFactory class createForClass() -> convert class to mongoose schema, mongoose doesnot understand the typescript classes directly
 * that method reads the @Schema and @Prop and creates real mongoose.Schema object.
 * @Document class adds the mongodb feat's like _id, save(), toJson(), timestamps etc..., without that typescipt wont know these exists.
 * @HydratedDocument a fully loaded mongodb document that contains both model fields and Mongoose document fields
 * */

@Schema({ timestamps: true })
export class Auth {
  @Prop({ required: true, index: true })
  userId: string;

  @Prop({ required: true, unique: true, index: true })
  token: string;

  @Prop({ type: Date, required: true })
  expiryTime: Date;

  @Prop({ type: Boolean, default: false })
  isActive: boolean;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
